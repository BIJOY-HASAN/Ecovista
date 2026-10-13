import { Suspense } from "react";

import TemperatureComponent from "@/components/TemperatureComponent";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

const TemperatureContent = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat != null && resolved?.lon != null) {
    return <TemperatureComponent lat={resolved.lat} lon={resolved.lon} />;
  }

  return <NoLocationInfo />;
};

const TemperaturePage = (props) => {
  return (
    <Suspense fallback={<p>Loading temperature data...</p>}>
      <TemperatureContent {...props} />
    </Suspense>
  );
};

export default TemperaturePage;
