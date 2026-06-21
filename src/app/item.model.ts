export interface Item {
  nombre: string;
  descripcion: string;
  estado: 'Pendiente' | 'En reparacion' | 'Listo';
}