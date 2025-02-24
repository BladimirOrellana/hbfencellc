import { useUser } from "./../context/userContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AuthGuard = ({ children }) => {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [user, loading, router]);

  if (loading) return <p>Loading...</p>; // Show loading until authentication is checked

  return user ? children : null; // Render only if user is authenticated
};

export default AuthGuard;
