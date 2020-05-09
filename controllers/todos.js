const express = require('express');
const router = express.Router();
const Todos = require('../models/todos.js');

router.get('/', (req, res) => {
    Todos.count({}, (err, count) => {
        Todos.find({}, (err, todos) => {
            res.render('Index', {
                count: count,
                todos: todos
            })
        })
    })
});

router.post('/new', (req, res) => {
    Todos.create(req.body, (err, data) => {
        res.redirect('/todos')
    })
});

router.delete('/:id', (req, res) => {
    Todos.findByIdAndRemove(req.params.id, () => {
        res.redirect('/todos');
    })
})

module.exports = router;