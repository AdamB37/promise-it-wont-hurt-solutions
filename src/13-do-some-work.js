var HTTP = require("q-io/http")

HTTP.read('http://localhost:7000')
.then((response) => {
  console.log(JSON.parse(response))
})
.then(response => {
  console.log(response);
  HTTP.read(`http://localhost:7001/${1}`,response)
  .then(JSON.parse)
  .then(console.log)
})
