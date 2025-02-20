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
    <div>
      <h1>Fence Measurement</h1>
      <FenceMeasurementTool />
    </div>
  );
}
