import styles from "./Content.module.css";

interface Props {
  Title: string;
}
function Content({ Title }: Props) {
  return <div className={styles.Title}>{Title}</div>;
}

export default Content;
