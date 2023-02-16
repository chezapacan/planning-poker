import styles from './TextField.module.css';

type Props = {
  full?: boolean;
  placeholder?: string;
  label?: string;
};

export const TextField = ({ full, placeholder, label }: Props) => {
  return (
    <div className={full ? styles.full : undefined}>
      {label ? <p className={styles.label}>{label}</p> : null}
      <input className={styles.input} placeholder={placeholder}></input>
    </div>
  );
};
