// import {getTicker, getTickers} from '../src/coinmarketcap'
const {getTicker, getTickers, getGlobalMarketData} = require('../src/coinmarketcap') // Should we use Babel and ES6 imports?

getTickers(function(err, results) {
    process.stdout.write(results);
    //console.log(results.toString());
});

if (1) {
    0 && getTicker('ethereum', function(err, result) {
        if (err) return console.log(err);

        console.log('RES', result.toString());
    });

    0 && getTicker('ethereum', 'CAD', function(err, result) {
        if (err) return console.log(err);
        // process.stdout.write(result);
        console.log('RES', result.toString());
    });

    0 && getTicker('ethereum', 'KKIISS', function(err, result) {
        if (err) return console.log(err);
        // process.stdout.write(result);
        console.log('RES', result.toString());
    });

    0 && getGlobalMarketData(function(err, result) {
        if (err) return console.log(err);

        console.log('RES', result.toString());
    });

    0 && getGlobalMarketData('CAD', function(err, result) {
        if (err) return console.log(err);

        console.log('RES', result.toString());
    });
}
