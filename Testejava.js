function calcularPrecos(custoProduto) {
    const taxaLucro = 0.2; // 20% de lucro
    const taxaJuros3x = 1.1; // 10% de juros para parcelamento em 3x
    const taxaJuros6x = 1.25; // 25% de juros para parcelamento em 6x
    const taxaJuros10x = 1.3; // 30% de juros para parcelamento em 10x
  
    // Calculando o valor de venda à vista
    const precoVista = custoProduto * (1 + taxaLucro);
  
    // Calculando o valor de venda parcelado em 3x
    const preco3x = Math.ceil(custoProduto * taxaJuros3x * (1 + taxaLucro) / 3);
  
    // Calculando o valor de venda parcelado em 6x
    const preco6x = Math.ceil(custoProduto * taxaJuros6x * (1 + taxaLucro) / 6);
  
    // Calculando o valor de venda parcelado em 10x
    const preco10x = Math.ceil(custoProduto * taxaJuros10x * (1 + taxaLucro) / 10);
  
    // Retornando um objeto com os preços calculados
    return {
      vista: precoVista,
      parcelado3x: preco3x * 3,
      parcelado6x: preco6x * 6,
      parcelado10x: preco10x * 10,
    };
  }