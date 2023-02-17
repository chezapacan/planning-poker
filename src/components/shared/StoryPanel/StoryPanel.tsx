import { Box } from '../../ui/Box/Box';
import { Divider } from '../../ui/Divider/Divider';
import { Text } from '../../ui/Text/Text';
import styles from './StoryPanel.module.css';

type Props = {
  storyInfo: string[];
};

export const StoryPanel = ({ storyInfo }: Props) => {
  const storyItems = storyInfo.map((e, index) => (
    <>
      <div className={styles.story}>
        <Text text={e} />
        <Text text='info 🗑️' link />
      </div>
      {index !== storyInfo.length - 1 ? <Divider /> : null}
    </>
  ));

  return (
    <Box>
      <Text text='Complited stories' large />
      <div className={styles.storyList}>{storyItems}</div>
    </Box>
  );
};
