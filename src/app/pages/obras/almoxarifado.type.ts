import { Material } from './material.type';
import { Obra } from './obra.type';

export interface Almoxarifado {
  id: number,
  nome: string,
  obra: Obra,
  materiais: Material[],
}
