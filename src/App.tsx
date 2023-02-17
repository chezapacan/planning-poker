import './App.css';
import { NavBar } from './components/layout/NavBar/NavBar';
import { Container } from './components/ui/Container/Container';
import { Room } from './pages/Room/Room';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Container>
        <Room />
      </Container>
    </div>
  );
}

export default App;
