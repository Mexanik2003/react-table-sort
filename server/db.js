const { isNumber } = require('lodash');
const { attachPaginate } = require('knex-paginate');
attachPaginate();

var types = require('pg').types;
// override parsing date column to Date()
types.setTypeParser(1082, val => val); 

const db = require('knex')({
    client: 'pg',
    connection: {
      host : process.env.PGHOST,
      user : process.env.PGUSER,
      password : process.env.PGPASSWORD,
      database : process.env.PGDATABASE,
      multipleStatements: true
    }
});

async function getObjectsList(params) {
    // if (!searchParams.page) {searchParams.page = 1}
    // if (!searchParams.lessonsPerPage) {searchParams.lessonsPerPage = 5}
    // offset = (searchParams.page - 1) * searchParams.lessonsPerPage;
    console.log(params)
    let query = null;
    let data = [];
    try {
        query = db
        .select('*')
        .from('objects')
        .orderBy(params.sort.columnName, params.sort.direction)
        // .offset((params.pagination.page) * params.pagination.itemsOnPage)
        // .limit(params.pagination.itemsOnPage)

        .where((builder) => {
            if (params.filter.columnName && params.filter.operator && params.filter.filterValue) {
                builder.where(params.filter.columnName, params.filter.operator, params.filter.filterValue);
            }
        })
        data = await query.paginate({ perPage: params.pagination.perPage, currentPage: params.pagination.currentPage, isLengthAware: true });
        console.log(query.toString());
        //console.log(data);
        //console.log(await query.paginate({ perPage: 10, currentPage: 1 }))
    } catch (err) {
        console.log(err.toString());
        
        return returnErr (err);
    }



    const answer = {};
    answer.data = data;
    answer.status = 200;
    return answer;
}

function returnErr (err) {
    const result = {};
    result.data=err.routine;
    result.status=400;
    return result;
}


module.exports = {
    getObjectsList
}


    
    