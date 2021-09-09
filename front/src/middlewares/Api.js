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
        page: 1,
        itemsOnPage: 10
    }
}


function setFilter(params) {
    tableFilterParams.filter = params;
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
        return res.json()
    })
}

export {setFilter, tableFilterParams};