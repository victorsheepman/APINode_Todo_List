const noteModel = require('../models/notes')
const getItems = async (req, res)=>{
	try {
		const notes = await noteModel.find({})
		res.json(notes)
	} catch (er) {
		res.status(400).json({msg:er})
	}
}

const createItem = async (req, res) =>{
	try {
		const note = new  noteModel({
			content: req.body.content,
			done:false
		})
		await note.save()
		res.json(note)
	} catch (er) {
		res.status(400).json({msg:er})
	}

}
const updateItem = async (req, res)=>{
	
	try {
		const {done} = await noteModel.findById(req.params.id)
		
		await noteModel.findByIdAndUpdate(req.params.id,{ done:!done })
		res.json({ msg:'success' })
	} catch (er) {
		res.json({ error:er.errors })
	}

}

const deleteItem = async (req, res)=>{
	try {
		await noteModel.findByIdAndRemove(req.params.id)
	} catch (er) {
		res.json({ error:er.errors })
	}
}

module.exports = {
	getItems,
	createItem,
	updateItem,
	deleteItem
}

