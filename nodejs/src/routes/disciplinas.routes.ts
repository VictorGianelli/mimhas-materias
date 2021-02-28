import { Router } from 'express';
import { startOfHour, isEqual, parseISO } from 'date-fns';

import { getCustomRepository } from 'typeorm';
import CreateDisciplinaService from '../services/CreateDisciplinaService';
import DisciplinasRepository from '../repositories/DisciplinasRepository';
//import { uuid } from 'uuidv4';
// import Disciplina from '../models/Disciplinas';

const disciplinasRoter = Router();

//const disciplinasRepository = new DisciplinasRepository
//const disciplinas: Disciplina[] = []

disciplinasRoter.get('/', async (request, response) => {
  // const disciplinasRepository = getCustomRepository(DisciplinasRepository)
  const disciplinasRepository = getCustomRepository(DisciplinasRepository)
  const disciplinas = await disciplinasRepository.find();

  return response.json(disciplinas);
})

disciplinasRoter.post('/', async (request, response) => {
  try {
    const { nomeDisciplina, date } = request.body;

    const parsedDate = parseISO(date)

    const createDisciplina = new CreateDisciplinaService()

    const disciplina = await createDisciplina.execute({
      nomeDisciplina,
      date: parsedDate,
    })

    return response.json(disciplina);

  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
});

export default disciplinasRoter;
