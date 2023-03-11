const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
var url = "mongodb://localhost:27017/studentdb";
// var global = require('bluebird');
// var session = require('express-session');
// var MongoStore = require('connect-mongo')({
//     session: session
// });
// app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     cookie: {
//         maxAge: 60 * 1000
//     },
//     secret: 'test_key',
//     store: new MongoStore({
//         mongooseConnection: mongoose.connection,
//         collection: 'session',
//         auto_reconnect: true
//     })
// }));
// // mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});


mongoose.Promise = global.Promise;
mongoose.connect(url, {
    useMongoClient: true,
    /* other options */
});
mongoose.connection.on('error', function () {
    console.error('MongoDB Connection Error. Make sure MongoDB is running.');
});
mongoose.set('debug', true);
this.getConnection = function () {
    return db;
}
const port = 2500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



app.use('/api/record', require('./Controllers/Record/RecordRouter'));


app.listen(port, () => console.log(`app is running on port ${port}`));

module.exports = app;