var https = require('https');
var http = require('http');

const DEBUG = false;

var get = function(url, callback) {
    if (DEBUG) console.log(url, 'statusCode: ', res.statusCode);

    var protocol = url.startsWith('https:') ? https : http;

    protocol.get(url, function(res) {
        res.on('data', function(data) {
            callback(null, data);
        });
        res.on('error', function(e) {
            callback(e || Error('get(): Error on ' + url));
        });
    });
};

module.exports = get;
