const express = require('express');
const path = require('path');
const os = require('os');

const app = express();

app.get('/', function(req, res) { 
   res.json(
	{
	    "ipaddress": null,
	    "language": null,
	    "sofware": null
	}
    );
});

app.listen(process.env.PORT || 3000, function(){
    console.log('listening...');
});
