import styles from './PlayerList.module.css';
import { Text } from '../../ui/Text/Text';
import { Divider } from '../../ui/Divider/Divider';

type playersInfo = {
  name: string;
  status: boolean;
  owner: boolean;
};

type Props = {
  playersInfo: playersInfo[];
};

export const PlayerList = ({ playersInfo }: Props) => {
  const playerItems = playersInfo.map((e, index) => (
    <div key={e.name}>
      <div className={styles.player}>
        <Text text={e.owner ? '👑 ' + e.name : e.name} />
        <Text text={e.status ? '✔️' : '❌'} />
      </div>
      {index !== playersInfo.length - 1 ? <Divider /> : null}
    </div>
  ));

  return (
    <div className={styles.playerList}>
      <Text text='PLAYERS' />
      {playerItems}
    </div>
  );
};
