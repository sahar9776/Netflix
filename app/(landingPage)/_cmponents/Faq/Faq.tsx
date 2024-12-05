import Content from "@/app/Components/Content/Content";
import styles from "./Faq.module.css";
import FaqBox from "../FaqBox/FaqBox";
// Data
import { FaqData } from "@/Static/faqQuestion";

function Faq() {
  return (
    <>
      <Content Title="Frequently Asked Questions" />

      <div className={styles.container}>
        {FaqData.map((item) => (
          <FaqBox key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default Faq;
