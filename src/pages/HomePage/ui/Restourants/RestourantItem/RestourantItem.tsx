import type { IRestourant } from "@/pages/HomePage/model/types";
import { Paragraph } from "@/shared/ui/Paragraph";
import Star from "@/shared/assets/icons/star.svg";
import Location from "@/shared/assets/icons/location.svg";
import styles from "./RestourantItem.module.scss";

interface IProps {
  data: IRestourant;
}

function RestourantItem({ data }: IProps) {
  const { img, label, paragraph, status, location, open } = data;

  return (
    <div className={styles.item}>
      <div className={styles.imgWrapper}>
        <img src={img} alt={label} />
      </div>
      <div className={styles.itemBody}>
        <Paragraph>{label}</Paragraph>
        <Paragraph type="medium" className={styles.paragraph}>
          {paragraph}
        </Paragraph>
        <div className={styles.statusBlock}>
          <img src={Star} alt="star" />
          <Paragraph type="medium" className={styles.statusParagraph}>
            {status}
          </Paragraph>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <div className={styles.left}>
            <img src={Location} alt="location" />
            <Paragraph type="medium">{location}</Paragraph>
          </div>
          <div className={styles.right}>
            {open ? (
              <Paragraph type="medium" className={styles.opened}>
                Opened
              </Paragraph>
            ) : (
              <Paragraph type="medium" className={styles.closed}>
                Closed
              </Paragraph>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestourantItem;
