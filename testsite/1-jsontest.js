// Created by 21343019_Arafil Azmi

// c. Menyimpan data dengan JSON

const fs = require('fs')

// const buku = 
// {
//     judul: 'Pemrograman Jaringan',
//     penulis: 'Randi Proska Sandra'
// }

// const bookJSON = JSON.stringify(buku)
// fs.writeFileSync('1-jsontest.json', bookJSON)

// d. Membaca Data JSON

const dataBuffer = fs.readFileSync('1-jsontest.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.judul)

