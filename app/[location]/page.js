
import LocationInfo from "@/components/LocationInfo";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

export default async function Home({ params, searchParams }) {
    const { location } = await params;
    const { latitude, longitude } = await searchParams;

    const resolved = await getResolvedLatLong(
        location,
        latitude,
        longitude
    );

    if (resolved?.lat != null && resolved?.lon != null) {
        return <LocationInfo lat={resolved.lat} lon={resolved.lon} />;
    }

    return <NoLocationInfo />;
}
