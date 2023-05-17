export const prova = ['A', 'C', 'B', 'B', 'A', 'C', 'B', 'C', 'A', 'A'];
const respostaPossivel = ['A', 'B', 'C'];

const gerarNumero = () => Math.round((Math.random() * 10) % 3);

export const gerarRespostas = (): string[] => {
  const respostas = [];

  for (let contador = 0; contador < 10; contador++) {
    respostas.push(respostaPossivel[gerarNumero()]);
  }
  return respostas;
};
