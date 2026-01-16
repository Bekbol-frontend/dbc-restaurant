import { clsx } from "@/shared/lib/clsx";
import type { ReactNode } from "react";
import styles from "./Paragraph.module.scss";

type ParagraphType = "large" | "medium" | "small";

interface IProps {
  type?: ParagraphType;
  children: ReactNode;
  className?: string;
}

function Paragraph({ children, type = "large", className = "" }: IProps) {
  return (
    <h2
      className={clsx([styles.paragraph, className], {
        [styles[type]]: true,
      })}
    >
      {children}
    </h2>
  );
}

export default Paragraph;
