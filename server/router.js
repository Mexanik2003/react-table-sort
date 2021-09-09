const Router = require('koa-router');
let router = new Router();
const { getData } = require('./middlewares/router');

router.post('/',getData);

module.exports = {
    router
};