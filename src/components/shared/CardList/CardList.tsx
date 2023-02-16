import styles from './CardList.module.css';
import { Card } from '../../ui/Card/Card';

type Props = {
  deck: string[];
};

export const CardList = ({ deck }: Props) => {
  const cards = deck.map((e) => <Card text={e} />);

  return <div className={styles.cardlist}>{cards}</div>;
};
