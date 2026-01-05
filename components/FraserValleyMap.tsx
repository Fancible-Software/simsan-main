"use client";

import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { colors } from "@/lib/colors";

// Service area locations with coordinates
const locations = [
  { name: "Abbotsford", lat: 49.0504, lng: -122.3045 },
  { name: "Anmore", lat: 49.3167, lng: -122.8667 },
  { name: "Belcarra", lat: 49.3167, lng: -122.8833 },
  { name: "Bowen Island", lat: 49.3833, lng: -123.3333 },
  { name: "Burnaby", lat: 49.2488, lng: -122.9805 },
  { name: "Chilliwack", lat: 49.1577, lng: -121.9509 },
  { name: "Coquitlam", lat: 49.2838, lng: -122.7932 },
  { name: "Delta", lat: 49.0847, lng: -123.0586 },
  { name: "Hope", lat: 49.3850, lng: -121.4419 },
  { name: "Langley", lat: 49.1044, lng: -122.6604 },
  { name: "Lions Bay", lat: 49.4500, lng: -123.2333 },
  { name: "Maple Ridge", lat: 49.2169, lng: -122.5986 },
  { name: "Mission", lat: 49.1337, lng: -122.3112 },
  { name: "New Westminster", lat: 49.2069, lng: -122.9110 },
  { name: "North Vancouver", lat: 49.3200, lng: -123.0724 },
  { name: "Pitt Meadows", lat: 49.2215, lng: -122.6901 },
  { name: "Port Coquitlam", lat: 49.2625, lng: -122.7811 },
  { name: "Port Moody", lat: 49.2831, lng: -122.8317 },
  { name: "Richmond", lat: 49.1666, lng: -123.1336 },
  { name: "Surrey", lat: 49.1913, lng: -122.8490 },
  { name: "Vancouver", lat: 49.2827, lng: -123.1207 },
  { name: "West Vancouver", lat: 49.3667, lng: -123.1667 },
  { name: "White Rock", lat: 49.0258, lng: -122.8028 },
];

export default function FraserValleyMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const isInitializedRef = useRef<boolean>(false);

  useEffect(() => {
    // Prevent multiple initializations
    if (!mapRef.current || isInitializedRef.current || mapInstanceRef.current) {
      return;
    }

    // Dynamically import Leaflet only on client side
    const initMap = async () => {
      // Double check after async import
      if (!mapRef.current || isInitializedRef.current || mapInstanceRef.current) {
        return;
      }

      try {
        const L = await import("leaflet");
        
        // Check if container already has a map instance
        if (mapRef.current && (mapRef.current as any)._leaflet_id) {
          return;
        }

        // Fix for default marker icon issue in Next.js
        delete (L.default as any).Icon.Default.prototype._getIconUrl;
        L.default.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
        });

        // Initialize the map centered on Fraser Valley
        const map = L.default.map(mapRef.current!, {
          preferCanvas: false,
        }).setView([49.2, -122.8], 10);

        // Add OpenStreetMap tile layer
        L.default.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
          maxZoom: 19,
        }).addTo(map);

        // Create custom icon
        const customIcon = L.default.divIcon({
          className: "custom-marker",
          html: `<div style="background-color: ${colors.primary}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
          iconSize: [24, 24],
          iconAnchor: [12, 12],
          popupAnchor: [0, -12],
        });

        // Add markers for each location
        locations.forEach((location) => {
          const marker = L.default
            .marker([location.lat, location.lng], { icon: customIcon })
            .addTo(map);
          marker.bindPopup(`<b>${location.name}</b>`);
        });

        // Create bounds from all locations to fit them all in view
        const bounds = L.default.latLngBounds(
          locations.map((loc) => [loc.lat, loc.lng] as [number, number])
        );
        map.fitBounds(bounds, { padding: [50, 50] });

        mapInstanceRef.current = map;
        isInitializedRef.current = true;
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    };

    initMap();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch (error) {
          console.error("Error removing map:", error);
        }
        mapInstanceRef.current = null;
        isInitializedRef.current = false;
      }
    };
  }, []);

  return (
    <Box
      ref={mapRef}
      className="w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg relative"
      style={{
        border: `3px solid ${colors.primary}`,
        borderRadius: "8px",
      }}
    />
  );
}

