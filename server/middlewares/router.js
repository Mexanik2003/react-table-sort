const { getObjectsList } = require('../db');


const getData = async (ctx, next) =>  {
    const result = await getObjectsList(ctx.request.body);
    ctx.status = result.status;
    ctx.body = result.data;
    next();
}

module.exports = {
    getData
}
