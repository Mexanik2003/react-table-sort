require('dotenv').config();
const Koa = require('koa');
const cors = require('@koa/cors');
let app = new Koa();
app.use(cors());

const { router } = require('./router.js');
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

app.use(router.routes())
//app.use(router.allowedMethods());
const server = app.listen(process.env.PORT);

module.exports = server; // для тестирования