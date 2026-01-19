import { Container } from "@/shared/ui/Container";
import { CardMenu } from "@/shared/ui/CardMenu";
import { useRef, useState } from "react";
import styles from "./BlockMenu.module.scss";

function BlockMenu() {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current!.offsetLeft);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDown(false);
  };

  const onMouseUp = () => {
    setIsDown(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - sliderRef.current!.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className={styles.section}>
      <Container>
        <div
          className={styles.flex}
          ref={sliderRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          <CardMenu className={styles.item} />
          <CardMenu className={styles.item} />
          <CardMenu className={styles.item} />
          <CardMenu className={styles.item} />
        </div>
      </Container>
    </section>
  );
}

export default BlockMenu;
