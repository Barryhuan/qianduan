// var re = /quick\s(brown).+?(jumps)/ig;
// var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
// console.log(re.lastIndex)


var text = 'cat, bat, sat, fat'
var patternl = /.at/g

var res = patternl.exec(text)
console.log(res[0])
console.log(res.index)
console.log(res.input)
console.log(patternl.lastIndex)

res = patternl.exec(text)
console.log(res[0])
console.log(res.index)
console.log(res.input)
console.log(patternl.lastIndex)
console.log(patternl.multiline)
console.log(patternl.global)
console.log(patternl.ignoreCase)