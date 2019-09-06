const express = require('express');
const app = express();
app.use(express.static('public'))
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-type');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
    res.header('Access-Control-Max-Age',1728000);
    next();
});

app.all('/data', (req, res) => {
    const data = {
        data: {
            arr: []
        }
    };
    res.json(data);
});
app.listen(3000);
