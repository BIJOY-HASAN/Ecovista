import { Suspense } from "react";

import TemperatureComponent from "@/components/TemperatureComponent";

const TemperatureContent = async ({ params, searchParams }) => {
  const { latitude, longitude } = await searchParams;

  return <TemperatureComponent lat={latitude} lon={longitude} />;
};

const TemperaturePage = (props) => {
  return (
    <Suspense fallback={<p>Loading temperature quality data...</p>}>
      <TemperatureContent {...props} />
    </Suspense>
  );
};

export default TemperaturePage;
