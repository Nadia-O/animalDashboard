require('../models/animal');

const mongoose = require('mongoose'),
    Animal = mongoose.model('Animal');

module.exports = {
    index: (req, res) => {
        Animal.find()
            .then(animals=> res.render('index', {allAnimals: animals})) // matches what I have in index.ejs
            .catch(err=> res.json(err.errors));
    },
    new: (req, res) => {
        res.render('new');
    },
    create: (req, res) => {
        console.log(req.body);
        Animal.create(req.body)
            .then(animal => (res.redirect('/')))
            .catch(err => res.json(err.errors));
    },
    show: (req, res) => {
        console.log(req.params.id);
        Animal.findById(req.params.id)
            .then(animal => res.render('show', {animal: animal}))
            .catch(err => res.json(err.errors));
    },
    edit: (req, res) => {
        console.log(req.params.id);
        Animal.findById(req.params.id)
            .then(animal => res.render('edit', {animal: animal}))
            .catch(err => res.json(err.errors));
    },
    update: (req, res) => {
        console.log(req.params.id)
        Animal.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators:true})
            .then(animal => res.redirect('/'))
            .catch(err => res.json(err.errors));
    },
    delete: (req, res) => {
        console.log(req.params.id)
        Animal.deleteOne({_id: req.params.id})
            .then(result => res.redirect('/'))
            .catch(err => res.json(err.errors));
    }
}