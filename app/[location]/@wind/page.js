import { Suspense } from "react";

import WindComponent from "@/components/WindComponent";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

const WindContent = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat != null && resolved?.lon != null) {
    return <WindComponent lat={resolved.lat} lon={resolved.lon} />;
  }

  return <NoLocationInfo />;
};

const WindPage = (props) => {
  return (
    <Suspense fallback={<p>Loading wind data...</p>}>
      <WindContent {...props} />
    </Suspense>
  );
};

export default WindPage;
