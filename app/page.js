import { Suspense } from "react";
import LocationDetector from "@/components/LocationDetector";

export default function Home() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
            <p className="text-2xl">Loading location...</p>
          </div>
        }
      >
        <LocationDetector />
      </Suspense>
    </div>
  );
}
