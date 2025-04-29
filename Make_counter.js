const makeCount = (initialvalue) => {
let count = initialvalue;
  return{  increase:  function(){
     count ++
     return count
    },
decrease: function() {
    count --
    return count
},
initial_value: function() {
count = initialvalue
return count
}
}}
let counter = makeCount(5)
console.log(counter.increase())
console.log(counter.increase())
console.log(counter.decrease())
console.log(counter.initial_value())