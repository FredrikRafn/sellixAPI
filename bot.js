const request = require('request');

const options = {
  url: 'https://dev.sellix.io/v1/orders/ORDER ID HERE', // You can also create products, get products etc. - just get the right API link + right request parameters, which is stated in the Sellix documentation.
  headers: {
    'Authorization': 'Bearer ENTER API KEY HERE'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
	var obj = JSON.parse(body);
	console.log(obj);
  }
}

request(options, callback);