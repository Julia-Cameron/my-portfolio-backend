import express from 'express';
import { getProjects, getProjectById, createProject, updateProject, deleteProject, deleteAllProjects } from '../../controllers/projects.controller.js';

const router = express.Router();

// Get all projects
router.get('/', getProjects);

// Get a project by ID
router.get('/:id', getProjectById);

// Create a new project
router.post('/', createProject);

// Update a project by ID
router.put('/:id', updateProject);

// Delete a project by ID
router.delete('/:id', deleteProject);

// Delete all projects
router.delete('/', deleteAllProjects);

export default router;  