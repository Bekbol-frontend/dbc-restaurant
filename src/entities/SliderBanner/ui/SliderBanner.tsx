import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";
import styles from "./SliderBanner.module.scss";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

const sliderItems = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
  "https://swiperjs.com/demos/images/nature-9.jpg",
];

function SliderBanner() {
  return (
    <div className={styles.swiperBlock}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={Math.floor(sliderItems.length / 2)}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        className={styles.swiper}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {sliderItems.map((el) => (
          <SwiperSlide className={styles.slide} key={el}>
            <img src={el} alt="image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderBanner;
