import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('validabarra')
export class Validabarra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'char',
    length: 11,
    nullable: true,
    default: ''
  })
  empresa: string;

  @Column({
    type: 'varchar',
    length: 15,
    nullable: true
  })
  campo: string;

  @Column({
    type: 'varchar',
    length: 25,
    nullable: true,
    default: ''
  })
  palabra: string;
}
