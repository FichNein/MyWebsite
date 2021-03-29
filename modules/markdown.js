var marked = require ('marked');
const fs = require('fs');


// Markdown Rendering
function md (filename) {
    var path = __dirname +"\\..\\res\\markdown\\" + filename;
    var include = fs.readFileSync (path, 'utf8');
    var html = marked(include);

    return html;
};

module.exports = { md }