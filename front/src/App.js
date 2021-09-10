import './App.css';
import Form from './components/Form';
import { setFilter, setSort, setPage, updateView } from './middlewares/Api';
import Table from './components/Table';
import {useEffect, useState} from 'react';
import Error from './components/Error';
import Paging from './components/Paging';


function App() {
  const [filterResult, setFilterResult] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    perPage: 10,
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
        setFilterResult(results.data);
        setPagination({
          currentPage: results.pagination.currentPage,
          perPage: results.pagination.perPage,
          total: results.pagination.total,
          lastPage: results.pagination.lastPage,
          from: results.pagination.from,
          to: results.pagination.to          
        })
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
    setPage({
      currentPage: 1,
      perPage: pagination.perPage,
    })
    getData();
  }

  function makeSort(params) {
    setSort(params);
    getData();
  }

  function makePage(params) {
    //console.log(params)
    setPage(params);
    //setPagination(params);
    getData();
  }

  return (
      <div className="app">
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
        <Paging
          setPage = {makePage}
          pagination = {pagination}
        />
      </div>
      
    );
  }

export default App;
