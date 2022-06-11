import connection from '../models/connection';
import NoteModel from '../models/note.model';
import Note from '../interfaces/note.interface';

class NoteService {
  public model: NoteModel;

  constructor() {
    this.model = new NoteModel(connection);
  }

  public async getAll(): Promise<Note[]> {
    const notes = await this.model.getAll();
    return notes;
  }
}

export default NoteService;