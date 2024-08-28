function formatter(text, action) {
    if (typeof text !== 'string') {
      return 'Erro: Entrada inválida. Esperado uma string.';
    }
  
    switch (action) {
      case 'lowercase':
        return text.toLowerCase();
      case 'uppercase':
        return text.toUpperCase();
      default:
        return 'Ação não suportada';
    }
  }
  
  export default formatter;
  