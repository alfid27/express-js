// exports.prosesGet = (req, res) => {
//         let nama = req.query.nama
//         let hobi = req.query.hobi
    
//         res.send(`Nama Saya ${nama} dan Hobi saya ${hobi}`)
// }

// exports.prosesPost = (req, res) => {
//         let id = req.params.id 

//         res.send(`Id Saya ${id}`)
// }


const fs = require ('fs');
const path = require ('path');


exports.prosesPost = (req, res) => {
     if(req,files) {
         let img = req.files.gambar
         let path = "./public/image/" + img.name
        
        img.mv(path,(err) => {
            if (err){
                Console.log(err);
            }else{
                let nama = req.body.nama
                let hobi = req.body.hobi

                res.send(`Nama Saya ${nama} dan hobi saya ${hobi} <br> <img src="../image/${img.name}">`)
            }
        });
    }

}