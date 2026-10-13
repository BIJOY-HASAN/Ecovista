import { Suspense } from "react";

import WeatherComponent from "@/components/WeatherComponent";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

const WeatherContent = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat != null && resolved?.lon != null) {
    return <WeatherComponent lat={resolved.lat} lon={resolved.lon} />;
  }

  return <NoLocationInfo />;
};

const WeatherPage = (props) => {
  return (
    <Suspense fallback={<p>Loading weather data...</p>}>
      <WeatherContent {...props} />
    </Suspense>
  );
};

export default WeatherPage;
