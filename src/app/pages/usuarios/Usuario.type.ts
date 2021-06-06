import { Funcionario } from "../funcionarios/funcionario";

export interface Usuario {
  id: number,
  name: string,
  email: string,
  username: string,
  funcionario: Funcionario,
}
