const express = require('express');

/*****************************************************
 * Define some constants and variables
 ****************************************************/

const app = express();
const port = 3000;

/*****************************************************
 * Routes
 ****************************************************/
 
app.get('/',  (req, res) => {
    res.send("Hello World!");
});

/*****************************************************
 * Start webserver
 ****************************************************/

app.listen(port, () => {
  console.log('==================================================\n\n')
  console.log(`Webserver running on http://localhost:${port}\n\n`);
  console.log('==================================================\n\n')
});