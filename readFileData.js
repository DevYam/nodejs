let fs = require('fs')
let dataJson = require('./data.json')
console.log(dataJson.name)

fs.readFile('./data.json', 'utf-8', (err, data)=>{
    /* With readFile method the data is read as string and we directly cannot read the
    name property from our data json here so in the next line we are parsing the data
    that is being passed to callback lin order to read the name property
     */
   console.log(data.name)
    data = JSON.parse(data)
    console.log(data.name)
})
