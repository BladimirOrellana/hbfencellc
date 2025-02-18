import { useEffect } from "react";

const EnhancifyWidget = () => {
  useEffect(() => {
    // Ensure script loads only once
    if (!document.getElementById("enhancify-widget-script")) {
      const script = document.createElement("script");
      script.id = "enhancify-widget-script";
      script.src =
        "https://www.enhancify.com/realwidget/?page=9924873&color1=%2368BA62&color2=%231C418C&color3=%23FFFFFF";
      script.async = true;

      script.onload = () => {
        console.log("Enhancify script loaded.");
        setTimeout(() => {
          if (window.Enhancify) {
            console.log("Initializing Enhancify Widget...");
            window.Enhancify.init(); // Force widget initialization
          }
        }, 500); // Delay to ensure widget container is in the DOM
      };

      script.onerror = () => {
        console.error("Failed to load Enhancify widget script.");
      };

      document.body.appendChild(script);
    } else {
      console.log("Enhancify script already exists.");
      setTimeout(() => {
        if (window.Enhancify) {
          console.log("Re-initializing Enhancify Widget...");
          window.Enhancify.init(); // Reinitialize in case it's already loaded
        }
      }, 500);
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
