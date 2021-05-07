const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const registerSchema = new Schema({

    nama: {
        type : String
    },

    asalsekolah: {
        type : String
    },

    jurusan:{
        type : String
    },

    emailstudents: {
        type : String
    }
})

module.exports = mongoose.model('register', registerSchema)