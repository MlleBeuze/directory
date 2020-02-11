const Category = require('../models/category');
const fs = require('fs');

exports.createCategory = (req, res, next) => {
  const { keyName, translation } = req.body;
  const category = new Category({ keyName, translation });

  category.save()
    .then(() => res.status(201).json({ message: 'Object created.' }))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneCategory = (req, res, next) => {
  Category.findOne({ _id: req.params.id })
    .then(category => res.status(200).json(category))
    .catch(error => res.status(400).json({ error }))
};

exports.getAllCategories = (req, res, next) => {
  Category.find()
    .then(categories => res.status(200).json(categories))
    .catch(error => res.status(400).json({ error }))
};

exports.editCategory = (req, res, next) => {
  const category = req.body;
  Category.update({ _id: req.params.id }, { category }, { overwrite: true })
    .then(() => res.status(200).json({ message: 'Object updated.' }))
    .catch(error => res.status(400).json({ error }))
};

exports.deleteCategory = (req, res, next) => {
  Category.findOne({ _id: req.params.id })
    .then((category) => {
      Category.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Object deleted.' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(400).json({ error }))
};