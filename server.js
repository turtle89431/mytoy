/**
 * Created by walterwinser on 4/2/17.
 */
var express = require('express')
var app = express()
//var dir='s'
app.locals.dir = 's'
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static('public'))
app.get('/', function (req, res) {
    res.sendfile('public/index.html')
})
app.get('update',function (req,res) {
    res.send(app.locals.dir)
})
app.route('/data').get(function (req,res) {
    res.send(app.locals.dir)
}).post(function (req,res) {
    console.log(req.body.dir)
    app.locals.dir = req.body.dir

})
app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!')
})