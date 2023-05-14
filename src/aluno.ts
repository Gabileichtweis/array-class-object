export class Aluno {
  public nota: number;
  public status: StatusProva;

  constructor(public nome: string, public idade: number) {
    this.nota = 0;
    this.status = StatusProva.Reprovado;
  }
}

enum StatusProva {
  Aprovado = 'Aprovado',
  Reprovado = 'Reprovado',
}
