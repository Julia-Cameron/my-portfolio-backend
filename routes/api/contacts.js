import express from 'express';
import {
    getContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact,
    deleteAllContacts
} from '../../controllers/contacts.controller.js';
import { authenticate } from '../../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', authenticate, getContacts);
router.get('/:id', authenticate, getContactById);
router.post('/', authenticate, createContact);
router.put('/:id', authenticate, updateContact);
router.delete('/:id', authenticate, deleteContact);
router.delete('/', authenticate, deleteAllContacts);

export default router;