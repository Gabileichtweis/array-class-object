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

function atividade3() {}
atividade3();

function atividade4() {}
atividade4();

function atividade5() {}
atividade5();

function atividade6() {}
atividade6();
