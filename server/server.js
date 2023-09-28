const path = require('path')
const express = require('express')
const sequelize = require('./config/connection')



const PORT = 3001
const app = express()



sequelize.sync({force: false}).then(()=> {
    app.listen(PORT, ()=>console.log(`Now listening on ${PORT}`))
})
