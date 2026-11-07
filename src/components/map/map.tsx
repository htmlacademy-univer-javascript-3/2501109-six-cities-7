import { useEffect, useRef } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Offer } from '../../mocks/offers';

type MapProps = {
  offers: Offer[];
  activeOfferId: string | null;
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

function Map({ offers, activeOfferId }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<ReturnType<typeof import('leaflet').map> | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      const map = import('leaflet').then((L) => {
        const instance = L.map(mapRef.current!, {
          center: {
            lat: 52.35514938496378,
            lng: 4.673877537499948,
          },
          zoom: 8,
        });

        L.tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }
        ).addTo(instance);

        mapInstanceRef.current = instance;
        return instance;
      });

      return () => {
        map.then((instance) => {
          instance.remove();
          mapInstanceRef.current = null;
        });
      };
    }
  }, []);

  useEffect(() => {
    if (mapInstanceRef.current) {
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
        mapInstanceRef.current?.removeLayer(markers);
      };
    }
  }, [offers, activeOfferId]);

  return <div ref={mapRef} style={{ height: '100%' }} />;
}

export default Map;
