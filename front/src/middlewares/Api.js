const tableFilterParams = {
    filter: {
        columnName: '',
        operator: '',
        filterValue: ''
    },
    sort: {
        columnName: 'date',
        direction: 'ASC'
    },
    pagination: {
        currentPage: 1,
        perPage: 10
}
}


function setFilter(params) {
    if (params) {tableFilterParams.filter = params} else {
        tableFilterParams.filter = {
            columnName: '',
            operator: '',
            filterValue: ''
        }
    };
}

function setSort(params) {
    if (params) {
        tableFilterParams.sort.columnName = params
        if (tableFilterParams.sort.direction === 'ASC') {
            tableFilterParams.sort.direction = 'DESC'
        } else {
            tableFilterParams.sort.direction = 'ASC'
        };
    } else {
        tableFilterParams.sort = {
            columnName: 'date',
            direction: 'ASC'
        }
    };
}

function setPage(params) {
    if (params) {
        tableFilterParams.pagination.currentPage = params.currentPage
        tableFilterParams.pagination.perPage = params.perPage
    } else {
        tableFilterParams.pagination = {
            currentPage: 1,
            perPage: 10
        }
    };
}

function updateView() {
    console.log(tableFilterParams)
    return sendQuery(tableFilterParams);
}

function sendQuery(params) {
    return fetch("http://localhost:5000/", {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(params)
    })
    .then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            return res.status;
        }
    })
}

export {setFilter, setSort, setPage, updateView, tableFilterParams};