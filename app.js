const ErrorResponse = require("./helpers/response.helper")
const Response = require("./helpers/response.helper")
const express = require('express')
const bodypares = require('body-parser')

const app = express()
const enpointex = require('./routers/enpointex.route')

app.use(express.json()) 
app.use(bodypares.json())

app.use('/', enpointex);


// Model (sequelize)
app.use((err, req, res, next) => {
    console.log(err)
    return res.status(err.status).json({
        status: false,
        data: {},
        error: err.error
    })
})

app.use('/', (req, res)=>{ 
    const data = 'Data Not Found!'
    return new ErrorResponse (res, 400, data)
})

module.exports = app