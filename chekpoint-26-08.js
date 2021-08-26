/*
Sala:
Integrantes: 

*/

//Aula 09 - Checkpoint - Microondas
/*Alimentos e seus respectivos tempos em segundos:
1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão);*/

function microondas(opcao, tempoSelecionado) {
  let opcaoSelecionada
  let tempoPadrao
  console.log('---------------------Menu---------------------\n')

  console.log('1 - Pipoca: 10 segundos(padrão) ')
  console.log('2 - Macarrão: 8 segundos(padrão)')
  console.log('3 - Carne: 15 segundos(padrão)')
  console.log('4 - Feijão: 12 segundos(padrão)')
  console.log('5 - Brigadeiro: 8 segundos(padrão)\n')
  console.log('Selecione a opção e informe o tempo desejado:\n')

  if (opcao == 1) {
    opcaoSelecionada = 'Pipoca'
    tempoPadrao = 10
  } else if (opcao == 2) {
    opcaoSelecionada = 'Macarrão'
    tempoPadrao = 8
  } else if (opcao == 3) {
    opcaoSelecionada = 'Carne'
    tempoPadrao = 15
  } else if (opcao == 4) {
    opcaoSelecionada = 'Feijão'
    tempoPadrao = 12
  } else {
    opcaoSelecionada = 'Brigadeiro'
    tempoPadrao = 8
  }

  function verificacao() {
    console.log(
      'Opção selecionada: ' +
        opcaoSelecionada +
        '\nTempo definido: ' +
        tempoSelecionado +
        ' segundos'
    )
    if (
      tempoSelecionado >= tempoPadrao * 2 &&
      tempoSelecionado < tempoPadrao * 3
    ) {
      console.log('A comida queimou!!!')
    } else if (tempoSelecionado < tempoPadrao) {
      console.log('Tempo insuficiente')
    } else if (tempoSelecionado >= tempoPadrao * 3) {
      console.log('Kabuummmm!!!!!')
    } else {
      console.log('Prato pronto, bom apetite')
    }
    return verificacao
  }

  switch (opcao) {
    case 1: //Pipoca-10s
      verificacao()
      break

    case 2: //Macarrao-8s
      verificacao()
      break

    case 3: //Carne-15s
      verificacao()
      break

    case 4: //Feijao-12s
      verificacao()
      break
    case 5: //Brigadeiro-8s
      verificacao()
      break

    default:
      //Nenhuma das opções
      console.log('Opção inválida!!!')
      break
  }
}

microondas(2, 15)
