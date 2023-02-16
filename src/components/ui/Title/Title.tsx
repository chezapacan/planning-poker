import styles from './Title.module.css';

type Props = {
  text: string;
};

export const Title = ({ text }: Props) => {
  return <div className={styles.title}>{text}</div>;
};
