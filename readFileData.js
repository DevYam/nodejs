let fs = require('fs')
let dataJson = require('./data.json')
console.log(dataJson.name)

fs.readFile('./data.json', 'utf-8', (err, data)=>{
   console.log(data.name)
    data = JSON.parse(data)
    console.log(data.name)
})
