import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Note from '../interfaces/note.interface';

const properties = ['note', 'collor'];

function validateProperties(note: Note): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(note, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
}

function validateValues(note: Note): [boolean, string | null] {
  const entries = Object.entries(note);
  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];
    if (!value) {
      return [false, property];
    }
  }
  return [true, null];
}

function validationNote(req: Request, res: Response, next: NextFunction) {
  const note: Note = req.body;

  let [valid, property] = validateProperties(note);

  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).send(
      `O campo ${property} é obrigatório.`,
    );
  }

  [valid, property] = validateValues(note);

  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).send(
      `O campo ${property} não pode ser nulo ou vazio.`,
    );
  }

  next();
}

export default validationNote;