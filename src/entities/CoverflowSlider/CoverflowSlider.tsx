import React, { useState, type CSSProperties } from "react";
import styles from "./CoverflowSlider.module.scss";

interface Slide {
  id: number;
  title: string;
  image: string;
  color: string;
}

const CoverflowSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(2);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Mountain Vista",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      color: "#4A90E2",
    },
    {
      id: 2,
      title: "Ocean Waves",
      image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop",
      color: "#50C878",
    },
    {
      id: 3,
      title: "City Lights",
      image:
        "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop",
      color: "#FF6B6B",
    },
    {
      id: 4,
      title: "Desert Dunes",
      image:
        "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop",
      color: "#FFD93D",
    },
    {
      id: 5,
      title: "Forest Path",
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=600&fit=crop",
      color: "#95E1D3",
    },
  ];

  const handlePrev = (): void => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const handleNext = (): void => {
    setActiveIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  const handleSlideClick = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.coverflowContainer}>
      <div className={styles.coverflowWrapper}>
        <div className={styles.slidesContainer}>
          {slides.map((slide, index) => {
            const offset = index - activeIndex;
            const absOffset = Math.abs(offset);
            const isActive = index === activeIndex;

            const slideStyle: CSSProperties & {
              [key: string]: string | number;
            } = {
              "--offset": offset.toString(),
              "--abs-offset": absOffset.toString(),
              zIndex: slides.length - absOffset,
            };

            return (
              <div
                key={slide.id}
                className={`${styles.slide} ${isActive ? styles.active : ""}`}
                style={slideStyle as CSSProperties}
                onClick={() => handleSlideClick(index)}
              >
                <div className={styles.slideContent}>
                  <img src={slide.image} alt={slide.title} />
                  <div
                    className={styles.slideOverlay}
                    style={{
                      background: `linear-gradient(135deg, ${slide.color}33, ${slide.color}66)`,
                    }}
                  />
                  <div className={styles.slideInfo}>
                    <h3>{slide.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className={`${styles.navButton} ${styles.prev}`}
          onClick={handlePrev}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className={`${styles.navButton} ${styles.next}`}
          onClick={handleNext}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === activeIndex ? styles.activeDot : ""
            }`}
            onClick={() => handleSlideClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CoverflowSlider;
