import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Activo {
  @Field()
  codigo: string;
  @Field()
  codadi: string;
  @Field()
  empresa: string;
  @Field()
  periodo: string;
  @Field()
  descrip: string;
  @Field()
  marca: string;
  @Field()
  modelo: string;
  @Field()
  dimension: string;
  @Field()
  color: string;
  @Field(() => Date)
  fecfabrica: Date;
  @Field()
  nserie: string;
  @Field()
  ruc: string;
  @Field()
  localizacion: string;
  @Field()
  ubica: string;
  @Field()
  responsa: string;
  @Field()
  estado: string;
  @Field()
  foto: string;
  @Field(() => Int)
  cantlote: number;
  @Field()
  codlote: string;
  @Field()
  motor: string;
  @Field()
  chasis: string;
  @Field()
  placa: string;
  @Field(()=> Int)
  afmenor: number;
  @Field()
  proyecto: string;
  @Field()
  negocio: string;
  @Field()
  familia: string;
  @Field()
  subfamilia: string;
  @Field()
  foto2: string;
  @Field()
  foto3: string;
  @Field(() => Boolean)
  compopadre: boolean;
  @Field()
  codcompo: string;
  @Field(() => Boolean)
  operativo: boolean;
  @Field()
  cdo_tablet: string;
  @Field(() => Int)
  conciliado: number;
  @Field(() => Date)
  fec_concil: Date;
  @Field()
  hor_concil: string;
  @Field()
  usr_concil: string;
  @Field()
  codbarra: string;
  @Field()
  fotoactualizado: string;
  @Field()
  foto2actualizado: string;
  @Field()
  foto3actualizado: string;
  @Field()
  observa: string;
  @Field()
  activo: string;
  @Field(() => Date)
  fechacreacion: Date;
  @Field(() => Date, {nullable: true})
  fechamodificacion?: Date;
  @Field()
  cuenta: string;
}
