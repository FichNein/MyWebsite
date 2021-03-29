const express = require('express')
const router = express.Router()
const md = require('./../modules/markdown')

router.get('/', (req,res) => {
    res.render ('blog', {"md": md.md});
})

module.exports = router