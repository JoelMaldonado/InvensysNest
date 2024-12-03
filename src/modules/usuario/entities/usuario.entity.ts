import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'char', length: 10, nullable: true, default: '' })
  codusu: string;

  @Column({ type: 'varchar', length: 30, nullable: true, default: '' })
  nombre: string;

  @Column({ type: 'char', length: 20, nullable: true, default: '' })
  clave: string;

  @Column({ type: 'char', length: 1, nullable: true, default: '' })
  acceso: string;

  @Column({ type: 'char', length: 1, nullable: true, default: 'S' })
  vigente: string;

  @CreateDateColumn({ name: 'fecregistro', type: 'datetime', nullable: true })
  fecregistro: Date;

  @Column({ type: 'char', length: 10, nullable: true })
  usuarioc: string;

  @UpdateDateColumn({ name: 'fecmodifica', type: 'datetime', nullable: true })
  fecmodifica: Date;

  @Column({ type: 'char', length: 10, nullable: true })
  usuariom: string;

  @Column({ name: 'fecbaja', type: 'datetime', nullable: true })
  fecbaja: Date;

  @Column({ type: 'char', length: 10, nullable: true })
  usuariob: string;

  @Column({ name: 'perfilId', type: 'int', nullable: true })
  perfilId: number;

  @Column({ name: 'archivofoto', type: 'varchar', length: 50, nullable: true })
  archivofoto: string;

  @Column({ name: 'rutafoto', type: 'varchar', length: 150, nullable: true })
  rutafoto: string;
}
