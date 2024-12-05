import styles from "./InputBox.module.css";

interface InputProps {
  id: string;
  type: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputBox({ id, type, label, value, onChange }: InputProps) {
  return (
    <div className={styles.InputBox}>
      <div className="">
        <input type={type} id={id} name={id} value={value} onChange={onChange} />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
}

export default InputBox;
