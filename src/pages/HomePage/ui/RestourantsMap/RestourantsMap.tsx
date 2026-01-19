import { Container } from "@/shared/ui/Container";
import styles from "./RestourantsMap.module.scss";
import { MapContainer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

type Restaurant = {
  id: number;
  name: string;
  lat: number;
  lng: number;
};

const restaurants: Restaurant[] = [
  { id: 1, name: "Cafe A", lat: 41.311, lng: 69.24 },
  { id: 2, name: "Cafe B", lat: 41.315, lng: 69.245 },
  { id: 3, name: "Cafe C", lat: 41.309, lng: 69.238 },
];

function RestourantsMap() {
  return (
    <section className={styles.section}>
      <Container>
        <MapContainer style={{ height: "400px" }} scrollWheelZoom={false}>
          <MarkerClusterGroup>
            {restaurants.map((r) => (
              <Marker key={r.id} position={[r.lat, r.lng]}>
                <Popup>{r.name}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </Container>
    </section>
  );
}

export default RestourantsMap;
