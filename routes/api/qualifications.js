import express from 'express';
import { getQualifications, getQualificationById, createQualification, updateQualification, deleteQualification, deleteAllQualifications } from '../../controllers/qualifications.controller.js';

const router = express.Router();

// Get all qualifications
router.get('/', getQualifications);

// Get a qualification by ID
router.get('/:id', getQualificationById);

// Create a new qualification
router.post('/', createQualification);

// Update a qualification by ID
router.put('/:id', updateQualification);

// Delete a qualification by ID
router.delete('/:id', deleteQualification);

// Delete all qualifications
router.delete('/', deleteAllQualifications);

export default router;  
