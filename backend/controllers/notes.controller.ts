import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import NoteService from '../services/notes.service';

class NotesController {
  constructor(private noteService = new NoteService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const notes = await this.noteService.getAll();
    res.status(StatusCodes.OK).json(notes);
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const note = await this.noteService.getById(id);

    if (!note) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'Note not found!'});
    }

    res.status(StatusCodes.OK).json(note);
  }

  public create = async (req: Request, res: Response) => {
    const note = req.body;

    const noteCreated = await this.noteService.create(note);
    res.status(StatusCodes.CREATED).json(noteCreated);
  };
}

export default NotesController;
