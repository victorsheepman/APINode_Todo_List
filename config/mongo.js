const mongoose = require('mongoose')

const dbConect = async () => {
	const DB_Uri = process.env.DB_Uri
	await mongoose.connect(DB_Uri, {
		useNewUrlParser:true,
		useUnifiedTopology:true
	})
}

module.exports = {dbConect}