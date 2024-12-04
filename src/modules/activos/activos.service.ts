import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivoInv } from './entities/activo.inv.entity';
import { Like, Repository } from 'typeorm';
import { toDomain } from 'src/domain/mappers/activo.inv.mapper';
import { QueryActivoDto } from './dto/query-activo.dto';
import { Validabarra } from './entities/validabarra.entity';

@Injectable()
export class ActivosService {
  constructor(
    @InjectRepository(ActivoInv)
    private readonly repo: Repository<ActivoInv>,

    @InjectRepository(Validabarra)
    private readonly repoValidaBarra: Repository<Validabarra>,
  ) {}

  async findAllBarra(empresa: string, periodo: string, codBarra: string) {
    const listValidaBarra = await this.repoValidaBarra.find({
      where: { 
        empresa,
        palabra: Like(`%${codBarra}%`)
      },
    });

    if (listValidaBarra.length > 0) {
      return {
        isSuccess: true,
        message: 'Palabra encontrada'
      };
    } else {
      const inv = await this.repo.findOne({
        where: {
          empresa,
          periodo,
          codbarra: codBarra
        },
      });

      if (inv) {
        return {
          isSuccess: false,
          message: `Este código de barra(${codBarra}) ya esta en uso en el item (${inv.descrip.trim()})`
        };
      } else {
        return {
          isSuccess: true,
          message: 'Código de barra disponible'
        };
      }
    }
  }

  async findAll(query?: QueryActivoDto) {
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

    if (query?.limit) {
      qb.limit(query.limit);
    }

    if (query?.codBarra) {
      const listValidaBarra = await this.repoValidaBarra.find({
        where: {
          palabra: Like(`%${query.codBarra}%`),
        },
      });
      if (listValidaBarra.length === 0) {
        qb.andWhere('activo.codBarra = :codBarra', {
          codBarra: query.codBarra,
        });
      }
    }

    const list = await qb.getMany();
    return list.map((item) => toDomain(item));
  }

  findOne(id: number) {
    return `This action returns a #${id} activo`;
  }
}
