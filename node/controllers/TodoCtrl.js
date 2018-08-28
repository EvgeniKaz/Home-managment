var Todo = require('../models/Todo.js')
class TodoCtrl {
	static getAll (req, res) {
		var db = req.app.get('db')
		Todo.getAll(db)
		.then(data => {
			var todos = data[0];
			var persons = data[1];
			var newTodos = todos.map(todo => {
				todo.person = persons.find(p => p.person_id === todo.personid)
				return todo;
			})
			res.json(newTodos)
		})
	}

	static add (req, res) {
		var db = req.app.get('db')
		Todo.add(db, req.body);
		res.send(201);
	}
}

module.exports = TodoCtrl