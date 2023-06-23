import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import './maps.css';

const MapLandingPage = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        language: "es-MX"
    });
    const center = useMemo(() => ({ lat: 19.390877, lng:-99.1652446 }), []);

    const cdmxBounds = {
        north: 19.592979,
        south: 19.188514,
        east: -98.960375,
        west: -99.327043
    };

    return(
        <div className="Map">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ): (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={12}
                    clickableIcons={false}
                    options={{
                        restriction: {
                            latLngBounds: cdmxBounds,
                            strictBounds: true
                        }
                    }}
                />
            )}
        </div>
    )
}

export default MapLandingPage;