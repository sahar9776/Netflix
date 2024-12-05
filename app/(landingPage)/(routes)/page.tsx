import Wrapper from "@/app/Components/Wrapper/Wrapper";
import MainBg from "../_cmponents/MainBg/MainBg";
import Trending from "../_cmponents/Trending/Trending";
import OnlyOnNetflix from "@/app/Components/OnlyOnNetflix/OnlyOnNetflix";
import MoreReasons from "@/app/Components/MoreReasons/MoreReasons";
import Faq from "../_cmponents/Faq/Faq";

export const metaData = {
  title: "Login - Netflix | Easy Coding Tutorial",
};

function Home() {
  return (
    <Wrapper>
      <MainBg />
      <Trending />
      <OnlyOnNetflix />
      <MoreReasons />
      <Faq />
    </Wrapper>
  );
}

export default Home;
