require('dotenv').config()
const express = require('express')
const cors = require('cors')
let bodyParser = require('body-parser')
const app = express()
// eslint-disable-next-line no-undef
const PORT = process.env.PORT
const {dbConect} = require('./config/mongo')
const unknownEndpoint =require('./app/middleware/unknownEndPoint')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(cors())

app.use('/api/1.0', require('./app/routes'))
app.use(unknownEndpoint)
dbConect().then(()=>console.log('holaDB')).catch(err=>console.log(err))
app.listen(PORT, ()=>{
	console.log('Api lista')
})