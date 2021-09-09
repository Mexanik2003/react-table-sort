import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { setFilter } from './middlewares/Api';
import Table from './components/Table';
import {useState} from 'react';



function App() {
  let [filterResult, setFilterResult] = useState([]);;

  function getData(params) {
    let result = setFilter(params)
      .then((results) => {
        console.log(results)
        setFilterResult(results);
      })
  }

  return (
    <div>
      <Form 
        setFilter = {getData}
      />
      <Table 
        data = {filterResult}
      />
    </div>
    
  );
}

export default App;
