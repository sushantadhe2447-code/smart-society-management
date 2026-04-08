const express = require('express');
const router = express.Router();

let complaints = []; // This array will act as a temporary data store for complaints

// POST to create a new complaint
router.post('/', (req, res) => {
    const complaint = req.body;
    complaints.push(complaint);
    res.status(201).json({ message: 'Complaint created successfully', complaint });
});

// GET to fetch all complaints
router.get('/', (req, res) => {
    res.status(200).json(complaints);
});

// GET by ID to fetch a complaint
router.get('/:id', (req, res) => {
    const complaintId = req.params.id;
    const complaint = complaints.find(c => c.id === complaintId);
    if (complaint) {
        res.status(200).json(complaint);
    } else {
        res.status(404).json({ message: 'Complaint not found' });
    }
});

// PUT to update the status of a complaint
router.put('/:id', (req, res) => {
    const complaintId = req.params.id;
    const { status } = req.body;
    const complaint = complaints.find(c => c.id === complaintId);
    if (complaint) {
        complaint.status = status;
        res.status(200).json({ message: 'Complaint updated successfully', complaint });
    } else {
        res.status(404).json({ message: 'Complaint not found' });
    }
});

// DELETE to remove a complaint
router.delete('/:id', (req, res) => {
    const complaintId = req.params.id;
    complaints = complaints.filter(c => c.id !== complaintId);
    res.status(200).json({ message: 'Complaint removed successfully' });
});

module.exports = router;
