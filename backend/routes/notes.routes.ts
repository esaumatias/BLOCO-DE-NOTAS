import { Router } from 'express';
import NotesController from '../controllers/notes.controller';

const router = Router();

const notesController = new NotesController();

router.get('/books', notesController.getAll);

export default router;