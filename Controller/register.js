const registerModel = require ('../model/register')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
    new Promise((resolve, reject) => {
        registerModel.create(data)
            .then(() => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Input Register'
                })
            }).catch(() => reject({
                status: false,
                pesan: 'Gagal Input Register'
            }))
    
    })

    exports.getAll = () =>
    new Promise((resolve, reject) => {
        registerModel.find()
            .then(result => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Menampilkan Data',
                    result: result
                })
            }).catch(() => reject({
                status: true,
                pesan: 'Gagal Mendapatkan Data',
                result: []
            }))
    })

exports.getById = (id) =>
    new Promise((resolve, reject) => {
        registerModel.findOne({
            _id: objectId(id),
        }).then(result => resolve({
            status: true,
            pesan: 'Berhasil Mendapatkan Data',
            result: result
        })).catch(() => reject({
            status: false,
            pesan: 'Gagal Mendapatkan Data',
            result: null
        }))
    })