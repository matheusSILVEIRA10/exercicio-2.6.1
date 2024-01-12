const alunos = [
    {
      nome: 'Matheus',
      notas: [
        { cadeira: 'LP', nota: 4 },
        { cadeira: 'BDR', nota: 2 },
      ],
    },
    {
      nome: 'pedro',
      notas: [
        { cadeira: 'LP', nota: 6 },
        { cadeira: 'BDR', nota: 9 },
      ],
    },
    {
      nome: 'paulo',
      notas: [
        { cadeira: 'LP', nota: 9 },
        { cadeira: 'BDR', nota: 8 },
      ],
    }
  ]

  const mediaGeral = alunos.map((aluno) => {
    const notas = aluno.notas.map((nota) => nota.nota);
    let somaNotas = 0;
    
    for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
    }
    
    const mediaGeral = somaNotas / notas.length;
    return { ...aluno, mediaGeral };
    });
    
    mediaGeral.map((aluno) => {
    console.log(------------------);
    console.log(`${aluno.nome} `);
    console.log(Media geral = ${aluno.mediaGeral});
    });