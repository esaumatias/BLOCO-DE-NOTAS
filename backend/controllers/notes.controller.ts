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

  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const note = req.body;
    const noteUpdate = await this.noteService.update(id, note);

    res.status(StatusCodes.CREATED).json(noteUpdate);
  };

  public remove = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.noteService.remove(id);

    res.status(StatusCodes.OK).json({ message: 'Note deleted successfully' });
  };
}

export default NotesController;
