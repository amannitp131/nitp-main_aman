"use client"
import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const hostelLocations = [
  {
    name: 'Bramhaputra Hostel',
    position: { lat: 25.535800, lng: 84.851200 },
    type: 'boys'
  },
  {
    name: 'Koshi Hostel',
    position: { lat: 25.536000, lng: 84.851500 },
    type: 'boys'
  },
  {
    name: 'Koshi Extension',
    position: { lat: 25.536200, lng: 84.851800 },
    type: 'boys'
  },
  {
    name: 'Bagmati Hostel',
    position: { lat: 25.536400, lng: 84.852100 },
    type: 'boys'
  },
  {
    name: 'Sone A Hostel',
    position: { lat: 25.536600, lng: 84.852400 },
    type: 'boys'
  },
  {
    name: 'Sone B Hostel',
    position: { lat: 25.536800, lng: 84.852700 },
    type: 'boys'
  },
  {
    name: 'Aryabhatta Hostel',
    position: { lat: 25.537000, lng: 84.853000 },
    type: 'boys'
  },
  {
    name: 'Kautilya Hostel',
    position: { lat: 25.537200, lng: 84.853300 },
    type: 'boys'
  },
  {
    name: 'EWS Hostel',
    position: { lat: 25.537400, lng: 84.853600 },
    type: 'boys'
  },
  {
    name: 'Ganga Hostel',
    position: { lat: 25.537600, lng: 84.853900 },
    type: 'girls'
  },
  {
    name: 'Ganga Extension',
    position: { lat: 25.537800, lng: 84.854200 },
    type: 'girls'
  },
  {
    name: 'Kandamini Hostel',
    position: { lat: 25.538000, lng: 84.854500 },
    type: 'girls'
  }
];

const HostelMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your API key
        version: 'weekly'
      });

      try {
        const google = await loader.load();
        
        if (mapRef.current && !mapInstanceRef.current) {
          const center = { lat: 25.536800, lng: 84.852700 }; // Center of all hostels
          
          const map = new google.maps.Map(mapRef.current, {
            center,
            zoom: 17,
            mapTypeId: 'satellite',
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
              }
            ]
          });
          
          mapInstanceRef.current = map;

          // Create markers for each hostel
          hostelLocations.forEach((location) => {
            const marker = new google.maps.Marker({
              position: location.position,
              map,
              title: location.name,
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: location.type === 'boys' ? '#4A90E2' : '#E24A8D',
                fillOpacity: 0.9,
                strokeColor: 'white',
                strokeWeight: 2,
                scale: 10
              }
            });

            const infoWindow = new google.maps.InfoWindow({
              content: `
                <div class="p-2">
                  <h3 class="font-semibold">${location.name}</h3>
                  <p class="text-sm text-gray-600">${location.type === 'boys' ? 'Boys' : 'Girls'} Hostel</p>
                </div>
              `
            });

            marker.addListener('click', () => {
              infoWindow.open(map, marker);
            });

            markersRef.current.push(marker);
          });
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    initMap();

    return () => {
      // Cleanup markers
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];
    };
  }, []);

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Hostel Locations</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#4A90E2] mr-2"></div>
              <span className="text-sm">Boys Hostel</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#E24A8D] mr-2"></div>
              <span className="text-sm">Girls Hostel</span>
            </div>
          </div>
        </div>
        <div ref={mapRef} className="w-full h-[600px] rounded-lg overflow-hidden"></div>
      </div>
    </div>
  );
};

export default HostelMap;