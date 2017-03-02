
var promise = Promise.reject(Error('error'))

.then(undefined, function(error) {
  console.log(error.message)
})
.catch(function(error) {
  console.log(error.message)
})
