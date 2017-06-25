var request = require("request");
var fs = require("fs");
var cheerio = require("cheerio");

var data = [];

function getData() {
    for (var i = 1; i < 50; i++) {
        request({
            url: "http://www.lotto-8.com/listltobig.asp?indexpage=" + i + "&orderby=new",
            method: "GET"
        }, function (e, r, b) {
            if (e || !b) { return; }
            var $ = cheerio.load(b);
            var result = []
            $('.auto-style4 tr').each(function (i, elem) {
                result.push($(this).text().split('\n'));
            });

            // console.log(result);

            for (var i = 1 ; i < result.length ; i++) {
                var parts = [];
                parts = (result[i][2].substring(23).split(','));
                for (var j = 0; j < 6; j++) {
                    parts[j] = Number(parts[j]);
                }

                data.push({
                    time: result[i][1].substring(24),
                    number: parts,
                    spnum: Number(result[i][3].substring(24))
                });
            }

            data.sort(function (a, b) {
                var parta = a.time.split('/');
                var partb = b.time.split('/');
                var c = new Date(parta[0] + "-" + parta[1] + "-" + parta[2]);
                var d = new Date(partb[0] + "-" + partb[1] + "-" + partb[2]);
                return d - c;
            });

            fs.writeFileSync("../output.json", JSON.stringify(data));
        });
    }
}
console.log("Data catched.");
exports.getData = getData;
