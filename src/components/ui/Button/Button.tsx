import styles from './Button.module.css';

type Props = {
  text: string;
  full?: boolean;
  outlined?: boolean;
};

export const Button = ({ text, full, outlined }: Props) => {
  return (
    <button className={`${styles.button} ${full ? styles.full : null}`}>
      {text}
    </button>
  );
};
