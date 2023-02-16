import styles from './Text.module.css';

type Props = {
  text: string;
  large?: boolean;
  link?: boolean;
};

export const Text = ({ text, large, link }: Props) => {
  return (
    <p
      className={`
        ${styles.text} 
        ${large ? styles.large : null} 
        ${link ? styles.link : null}
      `}
    >
      {text}
    </p>
  );
};
