import styles from "./ContentBox.module.css";

interface ContentBoxProps {
  h6Text: string;
}

function ContentBox({ h6Text }: ContentBoxProps) {
  return <div className={styles.Box}>
    <h6>{ h6Text }</h6>
  </div>;
}

export default ContentBox;
