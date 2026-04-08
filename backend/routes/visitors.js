'use strict';

const express = require('express');
const router = express.Router();

// Mock data for visitors
let visitors = [];

// GET all visitors
router.get('/', (req, res) => {
    res.status(200).json(visitors);
});

// POST a new visitor
router.post('/', (req, res) => {
    const newVisitor = req.body;
    visitors.push(newVisitor);
    res.status(201).json(newVisitor);
});

// GET a visitor by ID
router.get('/:id', (req, res) => {
    const visitor = visitors.find(v => v.id === parseInt(req.params.id));
    if (!visitor) return res.status(404).send('Visitor not found.');
    res.status(200).json(visitor);
});

// PUT update a visitor
router.put('/:id', (req, res) => {
    const visitorIndex = visitors.findIndex(v => v.id === parseInt(req.params.id));
    if (visitorIndex === -1) return res.status(404).send('Visitor not found.');
    visitors[visitorIndex] = req.body;
    res.status(200).json(visitors[visitorIndex]);
});

// DELETE a visitor
router.delete('/:id', (req, res) => {
    const visitorIndex = visitors.findIndex(v => v.id === parseInt(req.params.id));
    if (visitorIndex === -1) return res.status(404).send('Visitor not found.');
    visitors.splice(visitorIndex, 1);
    res.status(204).send();
});

module.exports = router;
