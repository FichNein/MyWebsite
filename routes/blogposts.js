const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    var marked = require ('marked');
    var fs = require('fs')

    var md = function (filename) {
       var path = __dirname +"\\..\\res\\posts\\" + filename;
       var include = fs.readFileSync (path, 'utf8');
       var html = marked(include);
 
       return html;
    };
 
    res.render ('blogposts', {"md": md});
})

module.exports = router