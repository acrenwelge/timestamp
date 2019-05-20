const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/:foo', function (req, res) {
  var time = req.params.foo;
  if (!isNaN(time)) {
    var date = new Date(Number(time)).toDateString();
  }
  else {
    var date = time;
    var time = new Date(date).valueOf().toString();
  }
  res.send({
    unix: time,
    natural: date
  });
})

app.listen(port, function () {
  console.log('Listening on port '+ port +'!')
})
