import { Banner } from "@/entities/Banner";
import BlockMenu from "./BlockMenu/BlockMenu";
import Restourants from "./Restourants/Restourants";

function HomePage() {
  return (
    <>
      <Banner />
      <BlockMenu />
      <Restourants />
    </>
  );
}

export default HomePage;
