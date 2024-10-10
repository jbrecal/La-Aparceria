export interface Componente {
    icon: string;
    name: string;
    redirectTo: string;
  }

  export interface cubierto{
    img: string;
    titulo:string;
    subtitulo:string;
    descripcion:string;
    detalles:string;
  }

export interface MenuSemana{
  img: string;
  id: number;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  ingredientes: string;
  gluten: string;
  lactosa: string;
  detalles: string;
  calorias: string;
  carbohidratos: string;
  proteina: string;
  grasas: string;
  grasas_saturadas: string;
  azucares: string;
  clickCount: any;
  selectedMenu: string;
  price: number;
} 