import { EntityRepository, Repository } from 'typeorm';

import Disciplina from '../models/Disciplinas'

@EntityRepository(Disciplina)
class DisciplinasRepository extends Repository<Disciplina> {
  public async findByDate(date: Date): Promise<Disciplina | null> {
    const findDisciplina = await this.findOne({
      where: { date }
    });

    return findDisciplina || null;
    
  }
}

export default DisciplinasRepository
