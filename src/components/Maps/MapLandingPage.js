import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import '../../css/Maps/maps.css';

const MapLandingPage = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });
    const center = useMemo(() => ({ lat: 19.390877, lng:-99.1652446 }), []);

    return(
        <div className="Map">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ): (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={12}
                />
            )}
        </div>
    )
}

export default MapLandingPage;