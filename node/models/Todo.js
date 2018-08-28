var ObjectId = require('mongodb').ObjectId;

class Todo {
	static getAll (db) {
		const todos = db.collection('todos').find().toArray()
		const persons = db.collection('persons').find().toArray()
		return Promise.all([todos, persons])
	}

	static add (db, newTodo) {
		db.collection('todos').insert(newTodo);
	}
}

module.exports = Todo