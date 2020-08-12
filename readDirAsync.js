let fs = require("fs")

function dirListing(err, data){
    console.log("Data is "+ data)
}

let data = fs.readdir("c:/",dirListing)

console.log("This comes after")
