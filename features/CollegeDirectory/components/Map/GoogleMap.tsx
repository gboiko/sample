import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { CollegeListProps } from "@types";

const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string;

interface GoogleMapProps {
  list: CollegeListProps[];
}

const DEFAULT_CENTER = { lat: 37.774273722954, lng: -97.87891431448463 }

function getCenter(list: CollegeListProps[]) {
  if (list.length > 1) return DEFAULT_CENTER;
  return { lat: list[0]["location.lat"], lng: list[0]["location.lon"] };
}

function getZoom(list: CollegeListProps[]) {
  return list.length > 1 ? 4 : 8;
}

function GoogleMap({ list }: GoogleMapProps) {
  const ref = useRef(null);

  useEffect(() => {
    const init = async () => {
      if (ref.current) {
        if (
          !window.google ||
          !window.google.maps ||
          !window.google.maps.places
        ) {
          await new Loader({
            apiKey: GOOGLE_MAP_API_KEY,
            ...{ libraries: ["places"] },
          }).load();
        }

        const map = new window.google.maps.Map(ref.current, {
          center: getCenter(list),
          zoom: getZoom(list),
          scrollwheel: false,
          scaleControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          panControl: false,
          disableDoubleClickZoom: true,
          draggable: false,
          styles: [
            {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: [{ color: "#444444" }],
            },
            {
              featureType: "landscape",
              elementType: "all",
              stylers: [{ color: "#f2f2f2" }],
            },
            {
              featureType: "poi",
              elementType: "all",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "road",
              elementType: "all",
              stylers: [{ saturation: -100 }, { lightness: 45 }],
            },
            {
              featureType: "road.highway",
              elementType: "all",
              stylers: [{ visibility: "simplified" }],
            },
            {
              featureType: "road.arterial",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "transit",
              elementType: "all",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "water",
              elementType: "all",
              stylers: [{ color: "#4299e1" }, { visibility: "on" }],
            },
          ],
        });

        list.map((marker, index) => {
          new google.maps.Marker({
            position: {
              lat: marker["location.lat"],
              lng: marker["location.lon"],
            },
            map,
            title: marker["school.name"],
            label: `${index + 1}`,
            optimized: true,
          });
        });
      }
    };

    init();
  }, [list]);

  return <div ref={ref} className="w-full h-96" />;
}

export default GoogleMap;
