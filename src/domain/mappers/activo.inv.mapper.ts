import { ActivoInv } from 'src/modules/activos/entities/activo.inv.entity';
import { Activo } from 'src/graph/activo/dto/activo.entity';

export function toDomain(activo: ActivoInv): Activo {
  const opera = activo.operativo2 === 0 ? activo.operativo === 1 : true;
  const compo = activo.compopadre2 === 0 ? activo.compopadre === 1 : true;
  const cLote = activo.cantlote === 0 ? 0 : activo.cantlote;

  const model: Activo = {
    codigo: activo.codigo.trim(),
    codadi: activo.codadi.trim(),
    empresa: activo.empresa.trim(),
    periodo: activo.periodo.trim(),
    descrip: activo.descrip2.trim() || activo.descrip.trim() || '',
    marca: activo.marca2.trim() || activo.marca.trim() || '',
    modelo: activo.modelo2.trim() || activo.modelo.trim() || '',
    dimension: activo.dimension2.trim() || activo.dimension.trim() || '',
    color: activo.color2.trim() || activo.color.trim() || '',
    fecfabrica: activo.fecfabrica,
    nserie: activo.nserie2.trim() || activo.nserie.trim() || '',
    ruc: activo.ruc2.trim() || activo.ruc.trim() || '',
    localizacion: activo.localizacion2.trim() || activo.localizacion.trim() || '',
    ubica: activo.ubica2.trim() || activo.ubica.trim() || '',
    responsa: activo.responsa2.trim() || activo.responsa.trim() || '',
    estado: activo.estado2.trim() || activo.estado.trim() || '',
    foto: activo.foto.trim() || '',
    cantlote: activo.cantlote2 || activo.cantlote || 0,
    codlote: activo.codlote2.trim() || activo.codlote.trim() || '',
    motor: activo.motor2.trim() || activo.motor.trim() || '',
    chasis: activo.chasis2.trim() || activo.chasis.trim() || '',
    placa: activo.placa2.trim() || activo.placa.trim() || '',
    afmenor: activo.afmenor2 || activo.afmenor || 0,
    proyecto: activo.proyecto2.trim() || activo.proyecto.trim() || '',
    negocio: activo.negocio2.trim() || activo.negocio.trim() || '',
    familia: activo.familia2.trim() || activo.familia.trim() || '',
    subfamilia: activo.subfamilia2.trim() || activo.subfamilia.trim() || '',
    foto2: activo.foto2.trim() || '',
    foto3: activo.foto3.trim() || '',
    compopadre: compo,
    codcompo: activo.codcompo2.trim() || activo.codcompo.trim() || '',
    operativo: opera,
    cdo_tablet: activo.cdo_tablet.trim() || '',
    conciliado: activo.conciliado || 0,
    fec_concil: activo.fec_concil,
    hor_concil: activo.hor_concil.trim() || '',
    usr_concil: activo.usr_concil.trim() || '',
    codbarra: activo.codbarra2.trim() || activo.codbarra.trim() || '',
    fotoactualizado: activo.fotoactualizado.trim() || '',
    foto2actualizado: activo.foto2actualizado.trim() || '',
    foto3actualizado: activo.foto3actualizado.trim() || '',
    observa: activo.observa.trim() || '',
    activo: activo.activo.trim() || '',
    fechacreacion: activo.fechacreacion,
    fechamodificacion: activo.fechamodificacion,
    cuenta: activo.cuenta.trim() || '',
  };

  return model;
}
