import React from 'react';

const Pagination = function (props) {

    //let items = new Array(props.itemsCount)
    //console.log(items)

    let pages = Math.floor(props.items.length/props.pagination.itemsOnPage);
    console.log(props.items.length)
    console.log(props.pagination.itemsOnPage)
    console.log(pages)
    const pagesArr = [];
    for (let i=0; i<=pages;i++) {
        pagesArr.push(i)
    }

    let itemsOnPage = props.pagination.itemsOnPage;

    function setPage(event) {
        pages = event.target.value;
        console.log(event.target.value)
        setPagination()
    }

    function setItemsOnPage(event) {
        //props.SetPage(event.target.value);
        itemsOnPage = event.target.value;
        console.log(event.target.value)
        setPagination()
    }

    function setPagination() {
        props.setPage({
            page: pages,
            itemsOnPage: itemsOnPage
        })

    }

    return (
        <div>
            <select id="page" onChange={setPage}>
                {
                    pagesArr.map((item) => <option key={item} value={item}>{item+1}</option>)
                }
            </select>
            <select id="itemsOnPage" onChange={setItemsOnPage}>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </div>
    )
}

export default Pagination;