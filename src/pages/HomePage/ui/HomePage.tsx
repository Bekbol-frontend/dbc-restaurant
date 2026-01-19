import { Banner } from "@/entities/Banner";
import BlockMenu from "./BlockMenu/BlockMenu";
import Restourants from "./Restourants/Restourants";
import RestourantsMap from "./RestourantsMap/RestourantsMap";

function HomePage() {
  return (
    <>
      <Banner />
      <BlockMenu />
      <Restourants />
      <RestourantsMap />
    </>
  );
}

export default HomePage;
