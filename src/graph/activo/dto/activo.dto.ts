import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ActivoDto {
  @Field(() => String)
  empresa: string;

  @Field(() => String)
  periodo: string;

  @Field(() => Number, { nullable: true })
  limit?: number;
}
