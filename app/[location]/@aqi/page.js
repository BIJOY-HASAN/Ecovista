import { Suspense } from "react";
import AQIComponent from "@/components/AQIComponent";

const AQIContent = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  return <AQIComponent lat={latitude} lon={longitude} />;
};

const AQIPage = (props) => {
  return (
    <Suspense fallback={<p>Loading air quality data...</p>}>
      <AQIContent {...props} />
    </Suspense>
  );
};

export default AQIPage;
