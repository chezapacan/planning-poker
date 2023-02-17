import styles from './GamePanel.module.css';
import { Box } from '../../ui/Box/Box';
import { Divider } from '../../ui/Divider/Divider';
import { Text } from '../../ui/Text/Text';
import { Button } from '../../ui/Button/Button';

type playersInfo = {
  name: string;
  status: boolean;
  owner: boolean;
};

type Props = {
  playersInfo: playersInfo[];
};

export const GamePanel = ({ playersInfo }: Props) => {
  const playerItems = playersInfo.map((e, index) => (
    <>
      <div className={styles.player}>
        <Text text={e.owner ? '👑 ' + e.name : e.name} />
        <Text text={e.status ? '✔️' : '❌'} />
      </div>
      {index !== playersInfo.length - 1 ? <Divider /> : null}
    </>
  ));

  return (
    <div className={styles.gamePanel}>
      <Box>
        <Text text='Game ready' large />
        <Button text='Start' />

        <div className={styles.playerList}>
          <Text text='PLAYERS' />
          {playerItems}
        </div>
        <Text text='Copy invite link' link />
      </Box>
    </div>
  );
};
