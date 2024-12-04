import { Controller, Get, Param, Query } from '@nestjs/common';
import { ActivosService } from './activos.service';
import { QueryActivoDto } from './dto/query-activo.dto';

@Controller('activos')
export class ActivosController {
  constructor(private readonly activosService: ActivosService) {}

  @Get()
  async findAll(@Query() query: QueryActivoDto) {
    return await this.activosService.findAll(query);
  }

  @Get('findCodBarra')
  async findAllBarra(
    @Query('empresa') empresa: string,
    @Query('periodo') periodo: string,
    @Query('codBarra') codBarra: string,
  ) {
    return await this.activosService.findAllBarra(empresa, periodo, codBarra);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activosService.findOne(+id);
  }

}
