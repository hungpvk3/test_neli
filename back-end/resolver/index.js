const db = require('../db/colection')
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      todos: () => db.collections.todo(),
    },

    Mutation: {
      addTodo: (params, args) => db.collections.addTodo(args),
      updateTodo: (params, args) => db.collections.updateTodo(args),
      deleteTodo: (params, args) => db.collections.deleteTodo(args.id),
    },
};

module.exports = resolvers;
