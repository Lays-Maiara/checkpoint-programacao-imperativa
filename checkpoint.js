/* Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".*/

function menuMicroondas(opcao, tempoUsuario) {
  let tempoPadrao

  switch (opcao) {
    case 'Pipoca':
      tempoPadrao = 10
      break
    case 'Macarrao':
      tempoPadrao = 8
      break
    case 'Carne':
      tempoPadrao = 15
      break
    case 'Feijao':
      tempoPadrao = 12
      break
    case 'Brigadeiro':
      tempoPadrao = 8
      break
    default:
      console.log('Prato inexistente')
      return
  }

  if ((tempoUsuario > 2 * tempoPadrao) && (tempoUsuario < 3 * tempoPadrao)) {
    console.log('A comida queimou')
  } else if (tempoUsuario < tempoPadrao) {
    console.log('Tempo insuficiente')
  } else if (tempoUsuario > 3 * tempoPadrao) {
    console.log('kabumm!')
  } else {
    console.log('Prato pronto, bom apetite!!!')
  }
}

menuMicroondas('Carne', 32)
menuMicroondas('Macarrao', 25)
menuMicroondas('Pipoca', 10)
menuMicroondas('Feijao', 27)
menuMicroondas('Brigadeiro', 4)
menuMicroondas('Lasanha', 23)
