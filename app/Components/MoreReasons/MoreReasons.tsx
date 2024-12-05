import ContentBox from "@/app/(landingPage)/_cmponents/ContentBox/ContentBox";
import Content from "../Content/Content";
import styles from "./MoreReasons.module.css";
// Data 
import { Reasons } from "@/Static/reason";

function MoreReasons() {
  return (
    <>
      <Content Title="More Reason To Join" />

      <div className={styles.container}>
        {Reasons.map((item) => (
          <ContentBox key={item.id} h6Text={item.Reason} />
        ))}
      </div>
    </>
  );
}

export default MoreReasons;
