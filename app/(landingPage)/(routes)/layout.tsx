import { ReactNode } from "react";
import styles from "./page.module.css";
import LandingNavbar from "../_cmponents/LandingNavbar/LandingNavbar";
import LandinFooter from "../_cmponents/LandinFooter/LandinFooter";

function LandingPageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LandingNavbar />
      {children}
      <LandinFooter />
    </>
  );
}

export default LandingPageLayout;
