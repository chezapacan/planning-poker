import styles from './Card.module.css';

type Props = {
  text: string;
  active?: boolean;
};

export const Card = ({ text, active }: Props) => {
  return (
    <div className={`${styles.card} ${active ? styles.active : null}`}>
      {text}
    </div>
  );
};
