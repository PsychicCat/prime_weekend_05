var mongoose = require('mongoose');
var schema = mongoose.Schema;

//todo schema
var todoSchema = new schema({
    text: { type: String, required: true },
    complete: { type: Boolean, default: false }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

