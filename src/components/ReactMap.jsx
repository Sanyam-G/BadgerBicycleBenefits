import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// --- Fix for default Leaflet markers in React/Vite ---
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;
// ----------------------------------------------------

// Helper to re-center map when user location changes
function RecenterMap({ location }) {
    const map = useMap();
    useEffect(() => {
        if (location) {
            map.setView([location.latitude, location.longitude], 13);
        }
    }, [location, map]);
    return null;
}

export default function ReactMap({ userLocation, businesses, selectedBusiness, onBusinessSelect }) {
    // Default to Madison, WI
    const center = userLocation 
        ? [userLocation.latitude, userLocation.longitude] 
        : [43.074761, -89.383761];

    return (
        <MapContainer 
            center={center} 
            zoom={13} 
            style={{ height: "100%", width: "100%", zIndex: 0 }}
            zoomControl={false}
        >
            {/* OPENSTREETMAP TILES (Free, No Key Required) */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <RecenterMap location={userLocation} />

            {/* User Location Marker */}
            {userLocation && (
                 <Marker 
                    position={[userLocation.latitude, userLocation.longitude]}
                    icon={L.divIcon({
                        className: "bg-blue-500 rounded-full border-2 border-white shadow-lg",
                        iconSize: [12, 12]
                    })}
                >
                    <Popup>You are here</Popup>
                </Marker>
            )}

            {/* Business Markers */}
            {businesses.map((business) => (
                <Marker 
                    key={business.id} 
                    position={[business.latitude, business.longitude]}
                    eventHandlers={{
                        click: () => onBusinessSelect(business),
                    }}
                >
                    <Popup>
                        <div className="text-center">
                            <h3 className="font-bold text-sm">{business.name}</h3>
                            <p className="text-xs text-gray-600">{business.discount}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}