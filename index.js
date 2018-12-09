const express = require('express');
const app = express();

const request = require('request');

app.get("/crawlerPrac", function (req, res) {
    const url = 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html';

    request(url, function(err, response, body) {
        console.log(body);
    });
});

app.listen(3000, function () {
    console.log('listening on port 3000');
});
