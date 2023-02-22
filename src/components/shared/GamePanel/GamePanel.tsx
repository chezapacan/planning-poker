import styles from './GamePanel.module.css';
import { Box } from '../../ui/Box/Box';
import { Text } from '../../ui/Text/Text';
import { Button } from '../../ui/Button/Button';
import { PlayerList } from '../PlayerList/PlayerList';

type Props = {};

export const GamePanel = ({}: Props) => {
  return (
    <div className={styles.gamePanel}>
      <Box>
        <Text text='Game ready' large />
        <Button text='Start' />
        <PlayerList
          playersInfo={[
            { name: 'player1', status: true, owner: true },
            { name: 'player2', status: false, owner: false },
            { name: 'player3', status: true, owner: false },
          ]}
        />
        <Text text='Copy invite link' link />
      </Box>
    </div>
  );
};
