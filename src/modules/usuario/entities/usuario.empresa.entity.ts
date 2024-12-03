import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('usuemp')
export class UsuarioEmpresa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'char', length: 10, nullable: false })
  codusu: string;

  @Column({ type: 'char', length: 11, nullable: false })
  empresa: string;

  @Column({ type: 'char', length: 1, default: 'S', nullable: true })
  vigente: string;

  @CreateDateColumn({ type: 'datetime', nullable: true })
  fecregistro: Date;

  @Column({ type: 'char', length: 10, nullable: true })
  usuarioc: string;

  @CreateDateColumn({ type: 'datetime', nullable: true })
  fecmodifica: Date;

  @Column({ type: 'char', length: 10, nullable: true })
  usuariom: string;

  @CreateDateColumn({ type: 'datetime', nullable: true })
  fecbaja: Date;

  @Column({ type: 'char', length: 10, nullable: true })
  usuariob: string;
}
