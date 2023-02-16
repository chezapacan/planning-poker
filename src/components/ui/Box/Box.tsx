import styles from './Box.module.css';

type Props = {
  children?: React.ReactNode;
  center?: boolean;
};

export const Box = ({ children, center }: Props) => {
  return (
    <div className={`${styles.box} ${center ? styles.center : null}`}>
      {children}
    </div>
  );
};
