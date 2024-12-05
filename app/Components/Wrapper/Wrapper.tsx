import { ReactNode } from "react";
import styles from "./Wrapper.module.css";

function Wrapper({ children }: { children: ReactNode }) {
  return <div className={styles.Wrapper}>{children}</div>;
}

export default Wrapper;
