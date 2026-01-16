import { clsx } from "@/shared/lib/clsx";
import type { ReactNode } from "react";
import styles from "./Label.module.scss";

type LabelType = "large" | "medium" | "small";

interface IProps {
  type?: LabelType;
  children: ReactNode;
  className?: string;
}

function Label({ children, type = "large", className = "" }: IProps) {
  return (
    <h2
      className={clsx([styles.label, className], {
        [styles[type]]: true,
      })}
    >
      {children}
    </h2>
  );
}

export default Label;
