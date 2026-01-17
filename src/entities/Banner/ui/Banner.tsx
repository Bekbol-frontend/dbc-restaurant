import { SliderBanner } from "@/entities/SliderBanner";
import styles from "./Banner.module.scss";

function Banner() {
  return (
    <section className={styles.banner}>
      <SliderBanner />
    </section>
  );
}

export default Banner;
