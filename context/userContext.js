import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./../utils/firebase"; // adjust the import path to your firebase config
import { onAuthStateChanged, signOut } from "firebase/auth";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for Firebase auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          // Fetch user data from MongoDB
          const res = await fetch(`/api/user?uid=${currentUser.uid}`);
          const data = await res.json();

          if (res.ok) {
            setUser(data.user); // Store MongoDB user globally
          } else {
            console.error("User not found in MongoDB:", data.message);
            setUser(null);
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Logout function
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
