import { Args, Query, Resolver } from '@nestjs/graphql';
import { ActivoService } from './activo.service';
import { Activo } from './dto/activo.entity';

@Resolver()
export class ActivoResolver {
    constructor(private readonly activosService: ActivoService) {}

    @Query(() => [Activo], { name: 'activos' })
    findAll() {
      const list = this.activosService.findAll();
      return  list
    }

}
