import { CardList } from '../../components/shared/CardList/CardList';
import { GamePanel } from '../../components/shared/GamePanel/GamePanel';
import { StoryPanel } from '../../components/shared/StoryPanel/StoryPanel';
import { Title } from '../../components/ui/Title/Title';
import styles from './Room.module.css';

type Props = {};

export const Room = ({}: Props) => {
  return (
    <div className={styles.room}>
      <Title text='Planning poker' />
      <div className={styles.game}>
        <div className={styles.left}>
          <CardList
            deck={[
              '0',
              '1/2',
              '1',
              '2',
              '3',
              '5',
              '8',
              '13',
              '20',
              '40',
              '?',
              '☕',
              '∞',
            ]}
          />
          <StoryPanel storyInfo={['Story1', 'Story2', 'Story3']} />
        </div>
        <GamePanel />
      </div>
    </div>
  );
};
