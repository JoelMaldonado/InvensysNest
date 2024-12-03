import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('activosinv')
export class ActivoInv {
  @PrimaryColumn({ type: 'char', length: 6 })
  codigo: string;

  @Column({ type: 'char', length: 15, nullable: true, default: '' })
  codadi: string;

  @Column({ type: 'char', length: 11, nullable: true, default: '' })
  empresa: string;

  @Column({ type: 'char', length: 6, nullable: true, default: '' })
  periodo: string;

  @Column({ type: 'varchar', length: 250, nullable: true, default: '' })
  descrip: string;

  @Column({ type: 'varchar', length: 250, nullable: true, default: '' })
  descrip2: string;

  @Column({ type: 'char', length: 15, nullable: true, default: '' })
  marca: string;

  @Column({ type: 'char', length: 15, nullable: true, default: '' })
  marca2: string;

  @Column({ type: 'char', length: 50, nullable: true, default: '' })
  modelo: string;

  @Column({ type: 'char', length: 50, nullable: true, default: '' })
  modelo2: string;

  @Column({ type: 'char', length: 20, nullable: true, default: '' })
  dimension: string;

  @Column({ type: 'char', length: 20, nullable: true, default: '' })
  dimension2: string;

  @Column({ type: 'char', length: 15, nullable: true, default: '' })
  color: string;

  @Column({ type: 'char', length: 15, nullable: true, default: '' })
  color2: string;

  @Column({
    type: 'datetime',
    nullable: true,
    default: () => "'1900-01-01 00:00:00'",
  })
  fecfabrica: Date;

  @Column({
    type: 'datetime',
    nullable: true,
    default: () => "'1900-01-01 00:00:00'",
  })
  fecfabrica2: Date;

  @Column({ type: 'char', length: 50, nullable: true, default: '' })
  nserie: string;

  @Column({ type: 'char', length: 50, nullable: true, default: '' })
  nserie2: string;

  @Column({ type: 'char', length: 11, nullable: true, default: '' })
  ruc: string;

  @Column({ type: 'char', length: 11, nullable: true, default: '' })
  ruc2: string;

  @Column({ type: 'char', length: 10, nullable: true, default: '' })
  localizacion: string;

  @Column({ type: 'char', length: 10, nullable: true, default: '' })
  localizacion2: string;

  @Column({ type: 'char', length: 10, nullable: true, default: '' })
  ubica: string;

  @Column({ type: 'char', length: 10, nullable: true, default: '' })
  ubica2: string;

  @Column({ type: 'char', length: 8, nullable: true, default: '' })
  responsa: string;

  @Column({ type: 'char', length: 8, nullable: true, default: '' })
  responsa2: string;

  @Column({ type: 'char', length: 4, nullable: true, default: '' })
  estado: string;

  @Column({ type: 'char', length: 4, nullable: true, default: '' })
  estado2: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  foto: string;

  @Column({
    type: 'numeric',
    precision: 6,
    scale: 2,
    nullable: true,
    default: 0,
  })
  cantlote: number;

  @Column({ type: 'varchar', length: 50, nullable: true, default: '' })
  codlote: string;

  @Column({ type: 'char', length: 20, nullable: true, default: '' })
  motor: string;

  @Column({ type: 'char', length: 20, nullable: true, default: '' })
  motor2: string;

  @Column({ type: 'char', length: 20, nullable: true, default: '' })
  chasis: string;

  @Column({ type: 'char', length: 20, nullable: true, default: '' })
  chasis2: string;

  @Column({ type: 'char', length: 10, nullable: true, default: '' })
  placa: string;

  @Column({ type: 'char', length: 20, nullable: true, default: '' })
  placa2: string;

  @Column({ type: 'int', nullable: true, default: 0 })
  afmenor: number;

  @Column({ type: 'char', length: 10, nullable: true, default: '' })
  proyecto: string;

  @Column({ type: 'char', length: 10, nullable: true, default: '' })
  proyecto2: string;

  @Column({ type: 'char', length: 10, nullable: true, default: '' })
  negocio: string;

  @Column({ type: 'char', length: 10, nullable: true, default: '' })
  negocio2: string;

  @Column({ type: 'char', length: 10, nullable: true, default: '' })
  familia: string;

  @Column({ type: 'char', length: 10, nullable: true, default: '' })
  familia2: string;

  @Column({ type: 'char', length: 10, nullable: true, default: '' })
  subfamilia: string;

  @Column({ type: 'char', length: 10, nullable: true, default: '' })
  subfamilia2: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  foto2: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  foto3: string;

  @Column({ type: 'int', nullable: true, default: 0 })
  compopadre: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  compopadre2: number;

  @Column({ type: 'char', length: 20, nullable: true, default: '' })
  codcompo: string;

  @Column({ type: 'char', length: 20, nullable: true, default: '' })
  codcompo2: string;

  @Column({ type: 'int', nullable: true, default: 0 })
  operativo: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  operativo2: number;

  @Column({ type: 'varchar', length: 20, nullable: true, default: '' })
  cdo_tablet: string;

  @Column({ type: 'int', nullable: true, default: 0 })
  conciliado: number;

  @Column({
    type: 'datetime',
    nullable: true,
    default: () => "'1900-01-01 00:00:00'",
  })
  fec_concil: Date;

  @Column({ type: 'char', length: 8, nullable: true, default: '' })
  hor_concil: string;

  @Column({ type: 'char', length: 25, nullable: true, default: '' })
  usr_concil: string;

  @Column({ type: 'char', length: 15, nullable: true, default: '' })
  codbarra: string;

  @Column({ type: 'varchar', length: 200, nullable: true, default: '' })
  fotoactualizado: string;

  @Column({ type: 'varchar', length: 200, nullable: true, default: '' })
  foto2actualizado: string;

  @Column({ type: 'varchar', length: 200, nullable: true, default: '' })
  foto3actualizado: string;

  @Column({ type: 'char', length: 15, nullable: true, default: '' })
  nfactura2: string;

  @Column({ type: 'char', length: 1, nullable: true, default: '' })
  moneda2: string;

  @Column({
    type: 'numeric',
    precision: 12,
    scale: 2,
    nullable: true,
    default: 0,
  })
  valord2: number;

  @Column({
    type: 'numeric',
    precision: 7,
    scale: 3,
    nullable: true,
    default: 0,
  })
  tipocamb2: number;

  @Column({
    type: 'numeric',
    precision: 12,
    scale: 2,
    nullable: true,
    default: 0,
  })
  valor2: number;

  @Column({ type: 'char', length: 15, nullable: true, default: '' })
  vouchercon2: string;

  @Column({
    type: 'numeric',
    precision: 6,
    scale: 2,
    nullable: true,
    default: 0,
  })
  cantlote2: number;

  @Column({ type: 'varchar', length: 50, nullable: true, default: '' })
  codlote2: string;

  @Column({ type: 'int', nullable: true, default: 0 })
  afmenor2: number;

  @Column({ type: 'char', length: 15, nullable: true, default: '' })
  codbarra2: string;

  @Column({ type: 'varchar', length: 'MAX', nullable: true, default: '' })
  observa: string;

  @Column({ type: 'bit', nullable: true, default: 0 })
  cargamasiva: boolean;

  @Column({ type: 'char', length: 1, nullable: true, default: 'S' })
  activo: string;

  @Column({ type: 'int', nullable: true })
  usuariocreacionid: number;

  @Column({ type: 'int', nullable: true })
  usuariomodificacionid: number;

  @Column({ type: 'int', nullable: true })
  usuarioeliminaid: number;

  @Column({ type: 'datetime', nullable: true, default: () => 'getdate()' })
  fechacreacion: Date;

  @Column({ type: 'datetime', nullable: true })
  fechamodificacion: Date;

  @Column({ type: 'datetime', nullable: true })
  fechaelimina: Date;

  @Column({ type: 'char', length: 12, nullable: true, default: '' })
  cuenta: string;
}
