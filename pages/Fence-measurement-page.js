import dynamic from "next/dynamic";

// Dynamically import to disable SSR for Mapbox
const FenceMeasurementTool = dynamic(
  () => import("../components/FenceMeasurementTool"),
  {
    ssr: false,
  }
);

export default function FenceMeasurementPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <FenceMeasurementTool />
    </div>
  );
}
