import { Injectable } from '@nestjs/common';
import { ActivosService } from 'src/modules/activos/activos.service';

@Injectable()
export class ActivoService {

  constructor(
    private readonly activoService: ActivosService
  ){}

  async findAll() {
    const list =  await this.activoService.findAll();
    return list;
  }
}
