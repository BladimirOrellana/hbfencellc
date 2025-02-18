import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically load the iframe component (Client-side only)
const EnhancifyBanner = dynamic(
  () =>
    Promise.resolve(() => {
      return (
        <iframe
          referrerPolicy="no-referrer-when-downgrade"
          style={{
            width: "100vw",
            maxWidth: "100vw",
            height: "180px",
            border: "none",
            overflow: "auto",
          }}
          src="https://www.enhancify.com/banner?name=Contractor_Text_930x180&page=9924873&hideLink=0"
          loading="lazy"
        ></iframe>
      );
    }),
  { ssr: false }
);

const FinancingBanner = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Financing Available</h2>
      <p>Apply now for easy financing with Enhancify.</p>
      <EnhancifyBanner />
    </div>
  );
};

export default FinancingBanner;
