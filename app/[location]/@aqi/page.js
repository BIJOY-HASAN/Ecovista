import { Suspense } from "react";
import AQIComponent from "@/components/AQIComponent";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

const AQIContent = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat != null && resolved?.lon != null) {
    return <AQIComponent lat={resolved.lat} lon={resolved.lon} />;
  }

  return <NoLocationInfo />;
};

const AQIPage = (props) => {
  return (
    <Suspense fallback={<p>Loading air quality data...</p>}>
      <AQIContent {...props} />
    </Suspense>
  );
};

export default AQIPage;
