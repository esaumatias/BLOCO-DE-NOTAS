import connection from '../models/connection';
import NoteModel from '../models/note.model';
import Note from '../interfaces/note.interface';
import { NotFoundError } from 'restify-errors';

class NoteService {
  public model: NoteModel;

  constructor() {
    this.model = new NoteModel(connection);
  }

  public async getAll(): Promise<Note[]> {
    const notes = await this.model.getAll();
    return notes;
  }

  public async getById(id: number): Promise<Note> {
    const note = await this.model.getById(id);
    return note;
  }

  public create(note: Note): Promise<Note> {
    return this.model.create(note);
  }

  public async update(id: number, note: Note): Promise<void> {
    const noteFound = await this.model.getById(id);
    if (!noteFound) {
      throw new NotFoundError('NotFoundError');
    }

    return this.model.update(id, note);
  }
}

export default NoteService;