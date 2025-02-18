import { useEffect } from "react";

const EnhancifyPaymentCalculator = () => {
  useEffect(() => {
    // Ensure the script loads only once
    if (!document.getElementById("enhancify-payment-script")) {
      const script = document.createElement("script");
      script.id = "enhancify-payment-script";
      script.src = "https://www.enhancify.com/paymentcalculatorwidget/";
      script.async = true;

      script.onload = () => {
        console.log("Enhancify Payment Calculator script loaded.");
        // Wait a bit and reinitialize the widget if necessary
        setTimeout(() => {
          if (window.Enhancify) {
            console.log("Initializing Enhancify Payment Calculator...");
            window.Enhancify.init();
          }
        }, 500);
      };

      script.onerror = () => {
        console.error("Failed to load Enhancify Payment Calculator script.");
      };

      document.body.appendChild(script);
    } else {
      console.log("Enhancify Payment Calculator script already exists.");
      setTimeout(() => {
        if (window.Enhancify) {
          console.log("Re-initializing Enhancify Payment Calculator...");
          window.Enhancify.init();
        }
      }, 500);
    }
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* The widget container with proper attributes */}
      <div
        id="paymentcalculatorwidget"
        data-defaultscheme="false"
        data-color1="#68BA62"
        data-color2="#1C418C"
        data-coBrandedColor="#FFFFFF"
        data-border="true"
        data-page="9924873"
        data-hidelink="0"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      ></div>
    </div>
  );
};

export default EnhancifyPaymentCalculator;
