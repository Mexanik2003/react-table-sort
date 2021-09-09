const { isNumber } = require('lodash');

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
    let data = [];
    try {
        data = await db.select('*').from('objects')
    //         .from('lessons').offset(offset).limit(searchParams.lessonsPerPage).where((builder) => {
    //             if (searchParams.date) {
    //                 let { date } = searchParams;
    //                 let dateArr = date.split(',');
    //                 if (dateArr.length < 2) {
    //                     builder.where('date',searchParams.date);
    //                 } else {
    //                     let maxDate, minDate;
    //                     if (Date.parse(dateArr[1]) >= Date.parse(dateArr[0])) {
    //                         maxDate=dateArr[1];
    //                         minDate=dateArr[0];
    //                     } else {
    //                         maxDate=dateArr[0];
    //                         minDate=dateArr[1];
    //                     }
    //                     builder.where('date', '>=', minDate);
    //                     builder.where('date', '<=', maxDate);
    //                 }
    //             }
    //         if (searchParams.status) builder.andWhere('status',searchParams.status);
    //         if (searchParams.teacherIds)  {
    //             builder.whereIn('id', function() {
    //                 const teachersIdsArr = searchParams.teacherIds.toString().split(",");
    //                 if (teachersIdsArr) {
    //                     this.select('lesson_id').from('lesson_teachers').whereIn('teacher_id',teachersIdsArr);
    //                 } else {
    //                     this.select('lesson_id').from('lesson_teachers').where('teacher_id',searchParams.teacherIds);
    //                 }
    //             });
    //         }
    //         if (searchParams.studentsCount) {
    //             let { studentsCount } = searchParams;
    //             if (Number(studentsCount)) {
    //                 builder.whereIn('id', function() {
    //                     this.select('lesson_id').from('lesson_students').groupBy('lesson_id')
    //                         .havingRaw('COUNT (student_id) = ' + studentsCount);
    //                 });
    //             } else {
    //                 const studentsCountArr = studentsCount.split(',');
    //                 builder.whereIn('id', function() {
    //                     this.select('lesson_id').from('lesson_students').groupBy('lesson_id')
    //                         .havingRaw('COUNT (student_id) between ' + Math.min.apply(null, studentsCountArr) + ' and ' + Math.max.apply(null, studentsCountArr));
    //                 });
    //             }
    //         }
    //     })//.toString();
    //     //console.log(data);

    //     for (key in data) {
    //         let query = await db.select('st.*', 'ls.visit').from({st: 'students', ls: 'lesson_students'})
    //             .whereRaw('st.id = ls.student_id')
    //             .andWhere('ls.lesson_id', data[key].id);
    //         data[key].students = query;
    //         query = await db.select('t.*').from({t: 'teachers', lt: 'lesson_teachers'})
    //             .whereRaw('t.id = lt.teacher_id')
    //             .andWhere('lt.lesson_id', data[key].id);
    //         data[key].teachers = query;
    //         //console.log(key);
    //     }
    //    console.log(data)
    //data = [{test: '123'}]
    } catch (err) {
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


    
    