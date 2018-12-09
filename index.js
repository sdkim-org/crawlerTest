const express = require('express');
const app = express();

const request = require('request');
const cheerio = require('cheerio');

app.get("/crawlerPrac", (req, res) => {
    const url = "http://movie.naver.com/movie/sdb/rank/rmovie.nhn";

    request(url, (err, response, body) => {
        let results = [];

        const $ = cheerio.load(body);
        let colArr = $('.tit3');
        for(let i=0; i<colArr.length; i++)
            results.push(colArr[i].children[1].attribs.title);
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
