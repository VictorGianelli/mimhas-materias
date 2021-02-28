import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('disciplinas')
class Disciplina {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nomeDisciplina: string;

  @Column('timestamp with time zone')
  date: Date;

}

export default Disciplina;
