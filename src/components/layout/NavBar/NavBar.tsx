import styles from './NavBar.module.css';
import { Container } from '../../ui/Container/Container';
import { Text } from '../../ui/Text/Text';

type Props = {};

export const NavBar = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <Text text='Planning Poker' />
        </div>
      </Container>
    </div>
  );
};
