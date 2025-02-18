import { useEffect } from "react";

const EnhancifyWidget = () => {
  useEffect(() => {
    // Check if script is already added
    if (!document.getElementById("enhancify-widget-script")) {
      const script = document.createElement("script");
      script.id = "enhancify-widget-script";
      script.src =
        "https://www.enhancify.com/realwidget/?page=9924873&color1=%2368BA62&color2=%231C418C&color3=%23FFFFFF";
      script.async = true;

      script.onload = () => {
        console.log("Enhancify script loaded.");
        if (window.Enhancify) {
          window.Enhancify.init(); // Try initializing if available
        }
      };

      script.onerror = () => {
        console.error("Failed to load Enhancify widget script.");
      };

      document.body.appendChild(script);
    } else {
      console.log("Enhancify script already exists.");
      if (window.Enhancify) {
        window.Enhancify.init(); // Try initializing again
      }
    }
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div
        className="realwidget"
        data-textbutton="Apply now"
        data-widthbtn="400"
      ></div>
    </div>
  );
};

export default EnhancifyWidget;
