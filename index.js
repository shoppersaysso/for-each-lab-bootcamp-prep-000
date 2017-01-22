function iterativeLog(array) {
  array.forEach((a, b) => {
    console.log(`${b}: ${a}`)
  })
}

function iterate(callback) {
  var array = ["One potato", "two potato", "three potato", "four"]
  array.forEach(callback);
  return array
}

function doToArray(array, callback) {
  array.forEach(callback);
}
