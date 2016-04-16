var express = require('express');
var app = express();

app.use(express.static('../'));

app.listen(3010, function() {
    console.log('Express app listening on port 3010');
});