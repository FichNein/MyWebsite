const express = require('express')
const app = express()


const fs = require('fs');
const routes = fs.readdirSync('./routes');
routes.forEach(route => {
    let routeNoE = route.substr(0, route.length - 3)
    let subRoute = './routes/' + routeNoE
    let router = require(subRoute)
    app.use('/' + routeNoE, router)
});



app.get('/', (req,res) => {
    res.render('index')
})

app.set('view engine', 'ejs')


app.listen(3000)