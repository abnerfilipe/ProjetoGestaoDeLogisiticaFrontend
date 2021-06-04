import { Almoxarifado } from './almoxarifado.type';

export interface Material {
  id: number,
  nome: string,
  peso: number,
  descricao: string,
  observacao: string,
  almoxarifado: Almoxarifado,
}
