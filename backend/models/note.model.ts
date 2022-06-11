import { Pool, ResultSetHeader } from 'mysql2/promise';
import Note from '../interfaces/note.interface';

export default class NoteModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Note[]> {
    const result = await this.connection
      .execute('SELECT * FROM notes');
    const [rows] = result;
    return rows as Note[];
  }

  public async getById(id: number): Promise<Note> {
    const result = await this.connection
      .execute('SELECT * FROM notes WHERE id=?', [id]);
    const [rows] = result;
    const [note] = rows as Note[];
    return note;
  }

  public async create(notes: Note): Promise<Note> {
    const { note } = notes;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (note) VALUES (?)',
      [note],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...notes };
  }
}