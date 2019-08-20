const express = require('express');
//const redis = require('redis');

//const dbUrl=process.env.REDIS_URL;
const app = express();
//const client = redis.createClient({
//host: 'redis-server',
//host: dbUrl,
//port: 6379
//});
//client.get('visits2')
//client.set('visits', 0);
var visits=0;
app.get('/', (req, res) => {
  //client.get('visits', (err, visits) => {
    visits=visits+1;
    res.send('Number of visits is ' + visits);
    //client.set('visits', parseInt(visits) + 1);
  //});
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
