import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity('empresa')
export class Empresa {
  @PrimaryColumn({ type: 'numeric', precision: 6, scale: 0 })
  id: number;

  @Column({ type: 'char', length: 10, nullable: true, default: '' })
  codigo: string;

  @Column({ type: 'char', length: 10, nullable: true, default: '' })
  nombcorto: string;

  @Column({ type: 'varchar', length: 200, nullable: true, default: '' })
  descrip: string;

  @Column({ type: 'varchar', length: 80, nullable: true, default: '' })
  direccion: string;

  @Column({ type: 'char', length: 11, nullable: true, default: '' })
  ruc: string;

  @Column({ type: 'char', length: 1, nullable: true, default: 'S' })
  vigente: string;

  @Column({ type: 'tinyint', nullable: true, default: 0 })
  online: number;

  @Column({ type: 'datetime', nullable: true })
  fecregistro: Date;

  @Column({ type: 'char', length: 10, nullable: true })
  usuarioc: string;

  @Column({ type: 'datetime', nullable: true })
  fecmodifica: Date;

  @Column({ type: 'char', length: 10, nullable: true })
  usuariom: string;

  @Column({ type: 'datetime', nullable: true })
  fecbaja: Date;

  @Column({ type: 'char', length: 10, nullable: true })
  usuariob: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  archivologo: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  rutalogo: string;
}
