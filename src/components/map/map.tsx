import { useEffect, useRef } from 'react';
import L, { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { City, Offer } from '../../mocks/offers';

type MapProps = {
  offers: Offer[];
  city: City;
  activeOfferId?: string | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

function Map({ offers, city, activeOfferId }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    let instance: L.Map | null = null;

    if (mapRef.current) {
      instance = L.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(instance);

      mapInstanceRef.current = instance;
    }

    return () => {
      if (instance) {
        instance.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [city.location.latitude, city.location.longitude, city.location.zoom]);

  useEffect(() => {
    if (!mapInstanceRef.current) {
      return;
    }

    const markers = layerGroup();

    offers.forEach((offer) => {
      const marker = new Marker(
        {
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        },
        {
          icon: offer.id === activeOfferId ? currentCustomIcon : defaultCustomIcon,
        }
      );
      marker.addTo(markers);
    });

    markers.addTo(mapInstanceRef.current);

    return () => {
      markers.remove();
    };
  }, [offers, activeOfferId]);

  return <div ref={mapRef} style={{ height: '100%' }} />;
}

export default Map;
