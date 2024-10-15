const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "cs1r73hr01qsperufdngcs1r73hr01qsperufdo0"
const finnhubClient = new finnhub.DefaultApi()

finnhubClient.quote("AEP", (error, data, response) => {
    console.log(data)
});