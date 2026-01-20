import { Container } from "@/shared/ui/Container";
import styles from "./RestourantsMap.module.scss";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import useBreakpoint from "@/shared/lib/hooks/useBreakpoint";

export interface Restaurant {
  id: number;
  name: string;
  lat: number;
  lon: number;
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Burger House",
    lat: 41.311081,
    lon: 69.240562,
  },
  {
    id: 2,
    name: "Pizza Time",
    lat: 41.3155,
    lon: 69.245,
  },
  {
    id: 3,
    name: "Cafe Istanbul",
    lat: 41.308,
    lon: 69.235,
  },
];

function RestourantsMap() {
  const { mobile } = useBreakpoint();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.mapWrapper}>
          <YMaps
            query={{
              apikey: "5a7dfd36-204d-4939-abea-b4b9011551d8",
            }}
            preload
          >
            <Map
              defaultState={{
                center: [41.311081, 69.240562],
                zoom: 13,
              }}
              width="100%"
              height={mobile ? "250px" : "500px"}
            >
              {restaurants.map((restaurant) => (
                <Placemark
                  key={restaurant.id}
                  geometry={[restaurant.lat, restaurant.lon]}
                  properties={{
                    balloonContent: restaurant.name,
                  }}
                />
              ))}
            </Map>
          </YMaps>
        </div>
      </Container>
    </section>
  );
}

export default RestourantsMap;
