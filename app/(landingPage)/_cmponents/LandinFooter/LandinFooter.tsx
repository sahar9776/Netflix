import Link from "next/link";
import styles from "./LandinFooter.module.css";

function LandinFooter() {
  return (
    <footer className={styles.Footer}>
        All Right Reserved 
      <Link href="https://www.netflix.com/"> Netflix </Link>
    </footer>
  );
}

export default LandinFooter;
