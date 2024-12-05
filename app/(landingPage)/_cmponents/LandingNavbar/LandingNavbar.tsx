import Link from "next/link";
import styles from "./LandingNavbar.module.css";

function LandingNavbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <img src="/assets/logo.png" alt="" />
      </Link>

      <Link href="/Auth" className={styles.btn}>Sign In</Link>
    </nav>
  );
}

export default LandingNavbar;
