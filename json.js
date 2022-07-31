const data = require("./data.json")
const {tas,teachers} = data

console.log("The Tas are:")
for ( let i = 0; i < tas.length; i++){
    let ta = tas[i]
    console.log(ta.name)
}

console.log("The Teachers are:")
for (let i =0; i < teachers.length; i++){
console.log(teachers[i].name)
}