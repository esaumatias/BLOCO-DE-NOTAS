import { Router } from 'express';
import NotesController from '../controllers/notes.controller';
import validationNote from '../middlewares/notes.middleware';

const router = Router();

const notesController = new NotesController();

router.get('/notas', notesController.getAll);
router.get('/notas/:id', notesController.getById);
router.post('/notas', validationNote, notesController.create);

export default router;