import { Module } from '@nestjs/common';
import { ActivoResolver } from './activo.resolver';
import { ActivoService } from './activo.service';
import { ActivosModule } from 'src/modules/activos/activos.module';

@Module({
  imports: [ActivosModule],
  providers: [ActivoResolver, ActivoService],
})
export class ActivoModule {}
