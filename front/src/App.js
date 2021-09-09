import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { setFilter } from './middlewares/Api';

function App() {

  return (
    <Form 
      setFilter = {setFilter}
    />
    
  );
}

export default App;
