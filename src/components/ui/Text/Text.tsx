import styles from './Text.module.css';

type Props = {
  text: string;
  large?: boolean;
  link?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export const Text = ({ text, large, link, onClick }: Props) => {
  return (
    <p
      className={`
        ${styles.text} 
        ${large ? styles.large : null} 
        ${link ? styles.link : null}
      `}
      onClick={onClick}
    >
      {text}
    </p>
  );
};
