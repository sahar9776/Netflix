import styles from "./OnlyOnNetflix.module.css";

import Content from "../Content/Content";
import Box from "../Box/Box";
import { OnlyOnNetflixData } from "@/Static/OnlyOnNetflixData";

function OnlyOnNetflix() {
  return (
    <>
      <Content Title="Onlyone Netflix" />
      <div className={styles.OnlyOnNetflix}>
        {
        OnlyOnNetflixData.map((item) => (
          <Box {...item} key={item.id} />
        ))
        }
      </div>
    </>
  );
}

export default OnlyOnNetflix;
