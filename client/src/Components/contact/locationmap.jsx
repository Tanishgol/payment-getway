import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMap = () => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);

    useEffect(() => {
        if (mapRef.current && !mapInstanceRef.current) {
            // Create map instance
            mapInstanceRef.current = L.map(mapRef.current).setView([28.6139, 77.209], 13);

            // Add tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(mapInstanceRef.current);

            // Add marker
            const restaurantIcon = L.icon({
                iconUrl: 'https://img.icons8.com/color/48/000000/restaurant.png',
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32],
            });

            L.marker([28.6139, 77.209], {
                icon: restaurantIcon,
            })
                .addTo(mapInstanceRef.current)
                .bindPopup('<b>Spice Route</b><br>Authentic Indian Cuisine')
                .openPopup();
        }

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">Our Location</h3>
            <div
                ref={mapRef}
                className="h-64 rounded-md border border-gray-200"
                style={{
                    width: '100%',
                }}
            ></div>
        </div>
    );
};

export default LocationMap;
