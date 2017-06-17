const get = require('./get');

const CURRENCIES = ['AUD', 'BRL', 'CAD', 'CHF', 'CNY', 'EUR', 'GBP', 'HKD', 'IDR', 'INR', 'JPY', 'KRW', 'MXN', 'RUB'];

const BASE_URL = 'https://api.coinmarketcap.com/v1';
const TICKER_URL = BASE_URL + '/ticker/';
const GLOBAL_URL = BASE_URL + '/global/';

var getCoinMarketHandler = function(callback) {
    var handler = function(err, data) {
        if (err) return callback(err);
        if (data && data.error) return callback(data);

        return callback(null, data);
    };
    return handler;
};

var getTickers = function(callback) {
    var handler = getCoinMarketHandler(callback);
    get(TICKER_URL, handler);
};

var getTicker = function(tickerId, currency, callback) {
    if (!callback) {
        callback = currency;
        currency = null;
    }
    if (!callback) {
        throw Error('getTicker(): Missing callback');
    }
    if (currency && !CURRENCIES.includes(currency)) {
        throw Error('getTicker(): currency not recognized ' + currency + ', only available: ' + CURRENCIES);
    }

    const tickerUrl = TICKER_URL + tickerId + '/' + (currency? ('?convert=' + currency) : '');

    var handler = getCoinMarketHandler(callback);
    get(tickerUrl, handler);
};

var getGlobalMarketData = function(currency, callback) {
    if (!callback) {
        callback = currency;
        currency = null;
    }
    if (!callback) {
        throw Error('getTicker(): Missing callback');
    }
    if (currency && !CURRENCIES.includes(currency)) {
        throw Error('getTicker(): currency not recognized ' + currency + ', only available: ' + CURRENCIES);
    }

    const globalUrl = GLOBAL_URL + (currency? ('?convert=' + currency) : '');

    var handler = getCoinMarketHandler(callback);
    get(globalUrl, handler);
};

module.exports = exports = {
    getTickers: getTickers,
    getTicker: getTicker,
    getGlobalMarketData: getGlobalMarketData
};
