import { Obra } from "../obras/obra.type";
import { Usuario } from "../usuarios/usuario.type";
import { Endereco } from "./endereco";

export class Funcionario {
  constructor(id: number) {
    this.id = id;
  }
  id: number;
  nome?: string;
  cpf?: string;
  matricula?: string;
  cargo?: string;
  dataNascimento?: string;
  endereco?: Endereco;
  sexo: string;
  obra?: Obra;
  usuario?: Usuario;
}
