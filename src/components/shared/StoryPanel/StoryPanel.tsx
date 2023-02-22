import { useState } from 'react';
import { Box } from '../../ui/Box/Box';
import { Divider } from '../../ui/Divider/Divider';
import { Modal } from '../../ui/Modal/Modal';
import { Text } from '../../ui/Text/Text';
import styles from './StoryPanel.module.css';

type Props = {
  storyInfo: string[];
};

export const StoryPanel = ({ storyInfo }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  const storyItems = storyInfo.map((e, index) => (
    <div key={e}>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box>
          <Text text={e} />
        </Box>
      </Modal>
      <div className={styles.story}>
        <Text text={e} />
        <div className={styles.info}>
          <Text text='info' link onClick={() => setOpenModal(true)} />
          <Text text='🗑️' link />
        </div>
      </div>
      {index !== storyInfo.length - 1 ? <Divider /> : null}
    </div>
  ));

  return (
    <Box>
      <Text text='Complited stories' large />
      <div className={styles.storyList}>{storyItems}</div>
    </Box>
  );
};
