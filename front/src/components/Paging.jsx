import React from 'react';
import Pagination from 'react-bootstrap/Pagination'
import './Paging.css';


const Paging = function (props) {

    //let items = new Array(props.itemsCount)
    //console.log(props.pagination)

    let {currentPage, perPage, total, lastPage, from, to} = props.pagination
    //let currentPage = props.pagination.currentPage;
    //let itemsOnPage = props.pagination.perPage;
    //let itemsOnPage = props.pagination.perPage;
    //let pages = Math.floor(props.items.length/props.pagination.itemsOnPage);
    // console.log(props.items.length)
    // console.log(props.pagination.itemsOnPage)
    // console.log(pages)
    let pageItems = [];
    let active = currentPage;
    if (lastPage <= 5) {
        for (let i=1; i<=lastPage;i++) {
            pageItems.push(
                <Pagination.Item key={i} active={currentPage === i} onClick={changePage}>
                    {i}
                </Pagination.Item>,
            )
        }
    } else {
        for (let i=Math.floor(lastPage/2)-2; i<=Math.floor(lastPage/2)+2;i++) {
            pageItems.push(
                <Pagination.Item key={i} active={currentPage === i} onClick={changePage}>
                    {i}
                </Pagination.Item>,
            )
        }

    }

    const pagesArr = [];
    for (let i=1; i<=lastPage;i++) {
        pagesArr.push(i)
    }


    function setPage(event) {
        currentPage = event.target.value;
        //console.log(total);
        setPagination()
    }

    function changePage(e) {
        currentPage = e.target.text;
        console.log(e.target.text)
        setPagination()
    }

    function setItemsOnPage(event) {
        perPage = +event.target.value;
        currentPage = 1;
        //console.log(perPage)
        setPagination()
    }

    function setPagination() {
        props.setPage({
            currentPage: currentPage,
            perPage: perPage
        })

    }

    return (
        <div className="pagination">
            {/* <select id="page" value={currentPage} onChange={setPage}>
                {
                    pagesArr.map((item) => <option key={item} value={item}>{item}</option>)
                }
            </select> */}
            <div className="pagination-perpage">
            <p>Строк на страницу: </p>
            <select id="itemsOnPage" value={props.pagination.perPage} onChange={setItemsOnPage}>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            </div>
            <Pagination className="pagination-pagelist">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item onClick={changePage}>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                {pageItems}

                <Pagination.Ellipsis />
                <Pagination.Item onClick={changePage}>{lastPage}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    )
}

export default Paging;