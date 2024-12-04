import { Module } from '@nestjs/common';
import { ActivosService } from './activos.service';
import { ActivosController } from './activos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivoInv } from './entities/activo.inv.entity';
import { Validabarra } from './entities/validabarra.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActivoInv, Validabarra])],
  exports: [ActivosService],
  controllers: [ActivosController],
  providers: [ActivosService],
})
export class ActivosModule {}
