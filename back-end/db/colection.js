const TodoModel = require('../models/Todo')

const collections = {
    todo: async () => await TodoModel.find({}),
    addTodo: async (todo) => {
        const newTodo = new TodoModel(todo)

        return await newTodo.save()
    },
    updateTodo: async (todo) => await TodoModel.findOneAndUpdate({_id: todo.id}, todo, { new: true }),
    deleteTodo: async (todoId) => {
        const prevTodo = await TodoModel.findOneAndDelete({_id: todoId})

        return prevTodo
    }
}

module.exports = { collections }
