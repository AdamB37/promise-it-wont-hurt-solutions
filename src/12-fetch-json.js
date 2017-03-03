var http = require('q-io')

fetch('http://localhost:1337')
.then(function(response) {
  http.read(response)
  .then(function(response) {
    console.log(JSON.parse(response));
  })
})
