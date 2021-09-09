const tableFilterParams = {
    filter: {
        columnName: '',
        operator: '',
        filterValue: ''
    },
    sort: {
        columnName: '',
        direction: 'ASC'
    },
    pagination: {
        page: 0,
        itemsOnPage: 0
    }
}


function setFilter(params) {
    tableFilterParams.filter = params;
    sendQuery(tableFilterParams);
}

function sendQuery(params) {
    // Шлем запрос
    console.log(tableFilterParams);

}

export {setFilter, tableFilterParams};