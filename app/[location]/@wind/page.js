import WindComponent from "@/components/WindComponent";
import { Suspense } from "react";

const WindContent = async ({ params, searchParams }) => {
  const { latitude, longitude } = await searchParams;

  return <WindComponent lat={latitude} lon={longitude} />;
};

const WindPage = (props) => {
  return (
    <Suspense fallback={<p>Loading wind quality data...</p>}>
      <WindContent {...props} />
    </Suspense>
  );
};

export default WindPage;
