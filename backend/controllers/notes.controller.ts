import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import NoteService from '../services/notes.service';

class NotesController {
  constructor(private noteService = new NoteService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const notes = await this.noteService.getAll();
    res.status(StatusCodes.OK).json(notes);
  };
}

export default NotesController;
