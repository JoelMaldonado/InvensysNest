export class QueryActivoDto {
  ubicacion?: string;
  estado?: string;
  proyecto?: string;
  familia?: string;
  empresa?: string;
  periodo?: string;
  limit?: number = 100;
  codBarra?: string;
}
