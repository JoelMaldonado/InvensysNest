import { Injectable } from '@nestjs/common';
import { ActivosService } from 'src/modules/activos/activos.service';
import { ActivoDto } from './dto/activo.dto';

@Injectable()
export class ActivoService {
  constructor(private readonly activoService: ActivosService) {}

  async findAll(filter: ActivoDto) {
    const list = await this.activoService.findAll({
      empresa: filter.empresa,
      periodo: filter.periodo,
      limit: filter.limit,
    });
    console.log(list.length);
    
    return list;
  }
}
