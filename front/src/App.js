import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { setFilter, setSort, setPage, updateView } from './middlewares/Api';
import Table from './components/Table';
import {useEffect, useState} from 'react';
import Error from './components/Error';
import Pagination from './components/Pagination';



function App() {
  const [filterResult, setFilterResult] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    itemsOnPage: 3
  });
  const [errorText, setErrorText] = useState('');
  useEffect(() => {
    setPage(pagination);
    getData();
  },[]);

  function getData() {
    updateView()
    .then((results) => {
      console.log(results)
      if (isNaN(results)){
        setFilterResult(results);
        setErrorText('');
      } else {
        //alert(results)
        setErrorText(`Ошибка в комбинации параметров (error ${results})`);
        setFilterResult([]);
      }
    })
  }

  function makeFilter(params) {
    setFilter(params);
    getData();
  }

  function makeSort(params) {
    setSort(params);
    getData();
  }

  function makePage(params) {
    setPagination(params);
    setPage(params);
    getData();
  }

  return (
      <div>
        <Form 
          setFilter = {makeFilter}
        />
        <Error 
          text = {errorText}
        />
        <Table 
          data = {filterResult}
          setSort = {makeSort}
        />
        <Pagination
          setPage = {makePage}
          pagination = {pagination}
          items = {filterResult}
        />
      </div>
      
    );
  }

export default App;
