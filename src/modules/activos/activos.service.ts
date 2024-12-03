import { Injectable } from '@nestjs/common';
import { CreateActivoDto } from './dto/create-activo.dto';
import { UpdateActivoDto } from './dto/update-activo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivoInv } from './entities/activo.inv.entity';
import { Repository } from 'typeorm';
import { MaestroQueryDto } from './dto/maestro-query.dto';
import { toDomain } from 'src/domain/mappers/activo.inv.mapper';

@Injectable()
export class ActivosService {
  constructor(
    @InjectRepository(ActivoInv)
    private readonly repo: Repository<ActivoInv>,
  ) {}

  create(createActivoDto: CreateActivoDto) {
    return 'This action adds a new activo';
  }

  async findAll(query?: MaestroQueryDto) {
    const qb = this.repo.createQueryBuilder('activo');

    if (query?.ubicacion) {
      qb.where('activo.ubica = :ubicacion OR activo.ubica2 = :ubicacion', {
        ubicacion: query.ubicacion,
      });
    }

    if (query?.estado) {
      qb.andWhere('activo.estado = :estado', { estado: query.estado });
    }

    if (query?.proyecto) {
      qb.andWhere('activo.proyecto = :proyecto', { proyecto: query.proyecto });
    }

    if (query?.familia) {
      qb.andWhere('activo.familia = :familia', { familia: query.familia });
    }

    if (query?.empresa) {
      qb.andWhere('activo.empresa = :empresa', { empresa: query.empresa });
    }

    if (query?.periodo) {
      qb.andWhere('activo.periodo = :periodo', { periodo: query.periodo });
    }

    if( query?.limit) {
      qb.limit(query.limit);
    }

    const list = await qb.getMany();

    const listMap = list.map((item) => {
      return toDomain(item);
    });
    return listMap;
  }

  findOne(id: number) {
    return `This action returns a #${id} activo`;
  }

  update(id: number, updateActivoDto: UpdateActivoDto) {
    return `This action updates a #${id} activo`;
  }

  remove(id: number) {
    return `This action removes a #${id} activo`;
  }
}
