import Content from "@/app/Components/Content/Content";
import styles from "./Trending.module.css";
import Box from "@/app/Components/Box/Box";

// For Static Data
import { TrendingOnNetflix } from "@/Static/trending";

function Trending() {
  return (
    <>
      <Content Title="Trending Now" />
      <div className={styles.Trending}>
        {TrendingOnNetflix.map((item) => (
          <Box {...item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default Trending;
