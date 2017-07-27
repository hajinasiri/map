var words = ["ground", "control", "to", "major", "tom"];

function mymap(arr, fun){
  result = [];
    arr.forEach(function(item){
      result.push(fun(item))
    });


  return result;
}

var out = mymap(words, function(word) {
  return word.length;
});
console.log(out);