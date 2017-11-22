const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res) {
    console.log(req.ip);
    res.json(
	{
	    "ipaddress": 'TODO',
	    "language": req.headers['accept-language'].split(",")[0],
	    "sofware": req.headers['user-agent'].match(/\((.+?)\)/)[1]
	}
    );
});

app.listen(process.env.PORT || 3000, function(){
    console.log('listening...');
});
