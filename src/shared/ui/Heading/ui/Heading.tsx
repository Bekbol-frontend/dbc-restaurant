import { clsx } from "@/shared/lib/clsx";
import type { ReactNode } from "react";
import styles from "./Heading.module.scss";

type HeadingType = "large" | "medium" | "small";

interface IProps {
  type?: HeadingType;
  children: ReactNode;
  className?: string;
}

function Heading({ children, type = "large", className = "" }: IProps) {
  return (
    <h1
      className={clsx([styles.heading, className], {
        [styles[type]]: true,
      })}
    >
      {children}
    </h1>
  );
}

export default Heading;
