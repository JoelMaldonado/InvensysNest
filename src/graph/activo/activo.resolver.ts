import { Args, Query, Resolver } from '@nestjs/graphql';
import { ActivoService } from './activo.service';
import { Activo } from './entities/activo.entity';
import { ActivoDto } from './dto/activo.dto';

@Resolver()
export class ActivoResolver {
    constructor(private readonly activosService: ActivoService) {}

    @Query(() => [Activo], { name: 'activos' })
    findAll(
      @Args('filter') filter: ActivoDto
    ) {
      return  this.activosService.findAll(filter);
    }

}
