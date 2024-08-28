function calculator(values, action) {
    const numericValues = values.map(Number); // Converte os valores para números
    switch (action) {
      case 'minimum':
        return Math.min(...numericValues); // Usa o spread operator para passar os valores como argumentos
      case 'maximum':
        return Math.max(...numericValues); // Usa o spread operator para passar os valores como argumentos
      default:
        return 'Ação não suportada'; // Mensagem padrão para ações desconhecidas
    }
  }
  
  export default calculator;
  