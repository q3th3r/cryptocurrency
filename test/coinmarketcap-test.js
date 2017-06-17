// import {getTicker, getTickers} from '../src/coinmarketcap'
const {getTicker, getTickers, getGlobalMarketData} = require('../src/coinmarketcap') // Should we use Babel and ES6 imports?

var output = function(err, result) {
    if (err) return console.log(err);
    // process.stdout.write(result);
    console.log('RES', result.toString());
};

0 && getTickers(output);
0 && getTicker('ethereum', output);
0 && getTicker('ethereum', 'CAD', output);
0 && getTicker('ethereum', 'KKIISS', output);
0 && getGlobalMarketData(output);
0 && getGlobalMarketData('CAD', output);
