import { Router } from 'express';
import NotesController from '../controllers/notes.controller';

const router = Router();

const notesController = new NotesController();

router.get('/notas', notesController.getAll);
router.get('/notas/:id', notesController.getById);

export default router;