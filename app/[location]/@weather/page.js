import WeatherComponent from "@/components/WeatherComponent";
import { Suspense } from "react";

const WeatherContent = async ({ params, searchParams }) => {
  const { latitude, longitude } = await searchParams;

  return <WeatherComponent lat={latitude} lon={longitude} />;
};

const WeatherPage = (props) => {
  return (
    <Suspense fallback={<p>Loading weather quality data...</p>}>
      <WeatherContent {...props} />
    </Suspense>
  );
};

export default WeatherPage;
