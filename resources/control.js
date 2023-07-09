const fs = require('fs')

const path = './products.json'

function leer(){
    let rawdata = fs.readFileSync(path)
    let productos = JSON.parse(rawdata)
    return productos;
}
function escibir(productos){
    let data = JSON.stringify(productos)
    console.log(`data: ${data}`)
    fs.writeFile(path,data,'utf-8',(err)=>{
        if (err) throw err
        console.log('data written to file')
    })
}

module.exports = {leer, escibir}