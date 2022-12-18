const express = require('express');
const userService = require('./users.service');
const router = express.Router();

// GET route to retrieve all users
router.get('/', (req, res) => {
    userService.findAll({}, (err, users) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json(userService.renvoiModel);
        }
    });
});

// GET pour obtenir un utilisateur en fonction de son id
router.get('/:id', (req, res) => {
    userService.getUserByID(req.params.id, (err, user) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json(user);
        }
    });
});

// POST pour ajouter un utilisateur
router.post('/', (req, res) => {
    userService.createUser((err) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json(userService.renvoiModel);
        }
    });
});

// PUT pour mettre à jour un utilisateur
router.put('/:id', (req, res) => {
    userService.updateUserByID(req.params.username, req.body, { new: true }, (err, user) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json(user);
        }
    });
});

// DELETE pour supprimer un utilisateur
router.delete('/:id', (req, res) => {
    userService.getUserByID(req.params.id, (err, user) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json(user);
        }
    });
});

module.exports = router;
