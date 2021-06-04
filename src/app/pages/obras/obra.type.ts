import { Almoxarifado } from "./almoxarifado.type";

export interface Obra {
  id: number,
  nome: string,
  descricao: string,
  codigo: string,
  almoxarifado: Almoxarifado,
  equipamentos: [],
  funcionarios: []
}
