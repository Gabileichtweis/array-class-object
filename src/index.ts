import { Aluno, StatusProva } from './aluno';
import { gerarRespostas, prova } from './prova';
import { Pessoa } from './pessoa';

function atividade1() {
  const listaNumeros: number[] = [
    8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4,
  ];
  const novaLista: number[] = listaNumeros.filter((numero) => numero % 2 !== 0);

  console.log(novaLista);
}

function atividade2() {
  const listaNumeros2: number[] = [
    8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4,
  ];

  //reduce => retorna 1 único valor
  const soma: number = listaNumeros2.reduce(
    (soma, numero) => (soma += numero),
    0
  );
  console.log(soma);
}

function atividade3() {
  const pessoa1 = new Pessoa('Gabriela', 20, 3000);
  const pessoa2 = new Pessoa('José', 42, 4500);
  const pessoa3 = new Pessoa('Alfredo', 28, 2100);
  const pessoa4 = new Pessoa('Natalia', 35, 1900);

  const listaPessoas: Pessoa[] = [pessoa1, pessoa2, pessoa3, pessoa4];

  const pessoasMenor23 = listaPessoas.filter((pessoa) => pessoa.idade < 23);

  console.log(pessoasMenor23.map((pessoa) => pessoa.nome));
}

function atividade4() {
  const pessoa1 = new Pessoa('Gabriela', 20, 3000);
  const pessoa2 = new Pessoa('José', 42, 4500);
  const pessoa3 = new Pessoa('Alfredo', 28, 2100);
  const pessoa4 = new Pessoa('Natalia', 35, 1900);

  const listaPessoas: Pessoa[] = [pessoa1, pessoa2, pessoa3, pessoa4];

  const pessoasMenor30 = listaPessoas.filter((pessoa) => pessoa.idade < 30);

  const mediaIdade =
    pessoasMenor30.reduce((soma, pessoa) => (soma += pessoa.idade), 0) /
    pessoasMenor30.length;

  console.log(mediaIdade);
}

function atividade5() {
  const pessoa1 = new Pessoa('Gabriela', 20, 3000);
  const pessoa2 = new Pessoa('José', 42, 4500);
  const pessoa3 = new Pessoa('Alfredo', 28, 1010);
  const pessoa4 = new Pessoa('Natalia', 35, 940);

  const listaPessoas: Pessoa[] = [pessoa1, pessoa2, pessoa3, pessoa4];

  const pessoasSalarioAbaixo = listaPessoas.filter(
    (pessoa) => pessoa.salario < 1027
  );

  const pessoaMapeada = pessoasSalarioAbaixo.map((pessoa) => ({
    nome: pessoa.nome,
    idade: pessoa.idade,
  }));

  console.log(pessoaMapeada);
}

function atividade6() {
  const aluno1 = new Aluno('Gabriela', 20);
  const aluno2 = new Aluno('André', 21);
  const aluno3 = new Aluno('Tauane', 32);
  const aluno4 = new Aluno('Alfredo', 29);
  const aluno5 = new Aluno('Matheus', 22);
  const aluno6 = new Aluno('Lucas', 30);
  const aluno7 = new Aluno('Manuela', 26);

  const listaAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6, aluno7];

  listaAlunos.forEach((aluno) => {
    const respostas = gerarRespostas();

    let acertos = 0;

    respostas.forEach((resposta, index) => {
      if (resposta === prova[index]) {
        acertos++;
      }
    });

    aluno.nota = acertos;

    if (aluno.nota >= 6) {
      aluno.status = StatusProva.Aprovado;
    } else {
      aluno.status = StatusProva.Reprovado;
    }
  });

  const aprovados = listaAlunos.filter(
    (aluno) => aluno.status === StatusProva.Aprovado
  );

  const reprovados = listaAlunos.filter(
    (aluno) => aluno.status === StatusProva.Reprovado
  );

  const media =
    listaAlunos.reduce((soma, aluno) => (soma += aluno.nota), 0) /
    listaAlunos.length;

  const melhorAluno = listaAlunos.reduce((alunoAtual, proximoAluno) => {
    if (alunoAtual.nota > proximoAluno.nota) {
      return alunoAtual;
    } else {
      return proximoAluno;
    }
  });

  const piorAluno = listaAlunos.reduce((alunoAtual, proximoAluno) => {
    if (alunoAtual.nota < proximoAluno.nota) {
      return alunoAtual;
    } else {
      return proximoAluno;
    }
  });

  console.log(`APORVADOS`);
  console.log(
    aprovados.map((aluno) => ({
      aluno: aluno.nome,
      nota: aluno.nota,
    }))
  );

  console.log(`REPROVADOS`);
  console.log(
    reprovados.map((aluno) => ({
      aluno: aluno.nome,
      nota: aluno.nota,
    }))
  );

  console.log(`Média da turma`);
  console.log(`Média: ${media.toFixed(2)}`);

  console.log(`Melhor Aluno`);
  console.log(`Nome: ${melhorAluno.nome} - Nota: ${melhorAluno.nota} `);

  console.log(`Pior Aluno`);
  console.log(`Nome: ${piorAluno.nome} - Nota: ${piorAluno.nota}`);
}
atividade6();
