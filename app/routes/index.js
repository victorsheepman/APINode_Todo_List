const express = require('express')
const router = express.Router()
const fs = require('fs')


// eslint-disable-next-line no-undef
const pathRouter = `${__dirname}`

const removeExtension = (fileName)=>fileName.split('.').shift()

fs.readdirSync(pathRouter).filter((file)=>{
	const fileWithOutExt = removeExtension(file)
	const skip = ['index'].includes(fileWithOutExt)
	if(!skip) {
		router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`))
		console.log('cargar ruta ->', fileWithOutExt)
	}
})

router.get('*',(req, res)=>{
	res.status(404)
	res.send({error:'Not Found'})
})

module.exports = router