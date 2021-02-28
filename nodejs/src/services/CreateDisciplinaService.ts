import { startOfDay, startOfHour } from "date-fns";
import { getCustomRepository } from 'typeorm';

import Disciplina from "../models/Disciplinas"
import DisciplinasRepository from "../repositories/DisciplinasRepository";

// const disciplinasRouter = Router();
// const disciplinasRepository = new DisciplinasRepository();


interface Request {
  nomeDisciplina: string,
  date: Date,
}

class CreateDisciplinaService {
  public async execute({ nomeDisciplina, date }: Request): Promise<Disciplina> {

    const disciplinasRepository = getCustomRepository(DisciplinasRepository)

    const disciplinaDate = startOfHour(date)

    const findWithTheSameDate = await disciplinasRepository.findByDate(
      disciplinaDate,
    );

    if (findWithTheSameDate) {
      throw Error('Essa materia ja foi criada hoje')
    }

    const disciplina = disciplinasRepository.create({
      nomeDisciplina,
      date:disciplinaDate
    })

    await disciplinasRepository.save(disciplina)

    return disciplina
  }
}

export default CreateDisciplinaService
