// Created by 21343019_Arafil Azmi

// a. Import Core Module Node.js

// const fs = require('fs')

// fs.writeFileSync('catatan.txt', 'Nama Saya Randi Proska')
// fs.appendFileSync('catatan.txt', ' Saya tinggal di Padang')

// b. Import File pada Node.js

// const catatan = require('./catatan.js')
// const pesan = catatan()
// console.log(pesan)

// c. Import npm ( Node Package Manager ) Pada Node.js
 
// const validator = require('validator')
// const ambilCatatan = require('./catatan.js')
// const pesan = ambilCatatan()
// console.log(pesan)
// console.log(validator.isURL('https://proska.com'))


// a. Mendapatkan Input Dari Pengguna 

// const ambilCatatan = require('./catatan.js')

// const command = process.argv[2]
// console.log(process.argv[2])

// if (command == 'tambah') 
//     {
//         console.log('Tambah Catatan')
//     } 
// else if (command == 'hapus') 
//     {
//         console.log('Hapus Catatan')
//     }

// // b. Argument Parsing ( Penguraian Argumen )
// const yargs = require('yargs')
// const catatan = require('./catatan.js')

// // Kustomisasi versi yargs
// yargs.version('10.1.0')

// // Membuat perintah (command) 'tambah'
// // yargs.command
// // ({
// //     command: 'tambah',
// //     describe: 'tambah sebuah catatan baru',
// //     handler: function ()
// //     {
// //         console.log('Sebuah catatan baru ditambahkan!')
// //     }
// // })

// yargs.command
// ({
//     command: 'tambah',
//     describe: 'Tambah sebuah catatan baru',
//     builder: 
//     {
//         judul: 
//         {
//             describe: 'Judul catatan',
//             demandOption: true,
//             type: 'string',
//         },
//         isi:
//         {
//             describe: 'Isi catatan',
//             demandOption: true,
//             type: 'string',
//         },
//     },
//     handler: function (argv) 
//     {
//         console.log('Judul: ' + argv.judul);
//         console.log('Isi: ' + argv.isi);
//     },
// });

// // Perintah hapus
// yargs.command
// ({
//     command: 'hapus',
//     describe: 'hapus catatan',
//     handler: function () 
//     {
//         console.log('Catatan berhasil dihapus')
//     }
// })

// // Instruksi no.4 letakan disini

// // Perintah list (daftar) semua catatan
// yargs.command
// ({
//     command: 'list',
//     describe: 'Tampilkan daftar semua catatan',
//     handler: function () 
//     {
//         console.log('Menampilkan daftar catatan');
//         // Tambahkan logika untuk menampilkan daftar catatan di sini
//     },
// });

// // Perintah membaca (read) sebuah catatan
// yargs.command
// ({
//     command: 'baca',
//     describe: 'Baca sebuah catatan',
//     handler: function () 
//     {
//         console.log('Anda sedang membaca sebuah catatan');
//         // Tambahkan logika untuk menampilkan daftar catatan di sini
//     },
// });


// // letakan bagian ini pada baris terakhir
// // console.log(yargs.argv)
// yargs.parse()


// e. Latihan Menyempurnakan aplikasi buku-catatan

// b. Argument Parsing ( Penguraian Argumen )
const yargs = require('yargs')
const catatan = require('./catatan.js')

// Kustomisasi versi yargs
yargs.version('10.1.0')

// Membuat perintah (command) 'tambah'
// yargs.command
// ({
//     command: 'tambah',
//     describe: 'tambah sebuah catatan baru',
//     handler: function ()
//     {
//         console.log('Sebuah catatan baru ditambahkan!')
//     }
// })

yargs.command
({
    command: 'tambah',
    describe: 'Tambah sebuah catatan baru',
    builder: 
    {
        judul: 
        {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string',
        },
        isi:
        {
            describe: 'Isi catatan',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) 
    {
        catatan.tambahCatatan(argv.judul, argv.isi)
    },
});

// Perintah hapus
yargs.command
({
    command: 'hapus',
    describe: 'hapus catatan',
    builder: 
    {
        judul: 
        {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) 
    {
        catatan.hapusCatatan(argv.judul)
    }
})

// Instruksi no.4 letakan disini

// // Perintah list (daftar) semua catatan
// yargs.command
// ({
//     command: 'list',
//     describe: 'Tampilkan daftar semua catatan',
//     handler: function () 
//     {
//         console.log('Menampilkan daftar catatan');
//         // Tambahkan logika untuk menampilkan daftar catatan di sini
//     },
// });

// // Perintah membaca (read) sebuah catatan
// yargs.command
// ({
//     command: 'baca',
//     describe: 'Baca sebuah catatan',
//     handler: function () 
//     {
//         console.log('Anda sedang membaca sebuah catatan');
//         // Tambahkan logika untuk menampilkan daftar catatan di sini
//     },
// });

// 3. Melanjutkan untuk membuat command list ( daftar ) dan baca ( read )

// Perintah list (daftar) semua catatan
yargs.command
({
    command: 'list',
    describe: 'Tampilkan daftar semua catatan',
    handler: function () 
    {
        console.log('Daftar Catatan:');
        const catatanlist = catatan.muatCatatan();
        catatanlist.forEach((catatan, index) => 
        {
            console.log(`${index + 1}. Judul: ${catatan.judul}`);
        });
    },
});

// Perintah membaca (read) sebuah catatan
yargs.command({
    command: 'baca',
    describe: 'Baca sebuah catatan',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        const catatanYangDibaca = catatan.muatCatatan().find(
            (catatan) => catatan.judul === argv.judul
        );
        if (catatanYangDibaca) {
            console.log('Judul: ' + catatanYangDibaca.judul);
            console.log('Isi: ' + catatanYangDibaca.isi);
        } else {
            console.log('Catatan tidak ditemukan.');
        }
    },
});

// letakan bagian ini pada baris terakhir
// console.log(yargs.argv)
yargs.parse();


