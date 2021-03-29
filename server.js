const express = require('express')
const fs = require('fs');
const md = require('./modules/markdown')

const app = express()

// Read in all the routes dynamically
const routes = fs.readdirSync('./routes');
routes.forEach(route => {
    let routeNoE = route.substr(0, route.length - 3)
    let subRoute = './routes/' + routeNoE
    let router = require(subRoute)
    app.use('/' + routeNoE, router)
});


// Index Routing
app.get('/', (req,res) => {
    res.render('index', {"md": md.md})
})

app.set('view engine', 'ejs')


app.listen(3000)