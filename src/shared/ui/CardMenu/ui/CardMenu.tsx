import { Label } from "../../Label";
import { Paragraph } from "../../Paragraph";
import Icon from "@/shared/assets/icons/menu-icon.svg";
import styles from "./CardMenu.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  className?: string;
}

function CardMenu({ className = "" }: IProps) {
  return (
    <div className={clsx([styles.cardMenu, className])}>
      <span className={styles.span}>
        <img src={Icon} alt="icon" />
      </span>

      <div>
        <Label type="medium" className={styles.label}>
          Ommabop kafelar
        </Label>
        <Paragraph type="medium" className={styles.paragraph}>
          Qaynoq qahva va sokin muhit.
        </Paragraph>
      </div>
    </div>
  );
}

export default CardMenu;
