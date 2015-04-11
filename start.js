var express=require('express');
var app=express();
var html_dir = './';

// routes to serve the static HTML files
app.get('/index', function(req, res) {
    res.sendfile(html_dir + 'index.html');
});
app.get('/auth', function(req, res) {
    res.sendfile(html_dir + 'auth.html');
});

app.listen(3000);