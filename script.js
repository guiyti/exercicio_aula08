// Função para converter um número decimal em binário
console.log('script carregado')

    function decimalBinario(decimal) {
      let binario = '';
      while (decimal > 0) {
        binario = (decimal % 2) + binario;
        decimal = Math.floor(decimal / 2);
      }
      if (binario === '') {
        return '0';
      }
      return binario;
    }

    // Função para converter um número binário em decimal
    function binarioDecimal(binario) {
      let decimal = 0;
      for (let i = 0; i < binario.length; i++) {
        const bit = parseInt(binario.charAt(binario.length - 1 - i));
        decimal += bit * Math.pow(2, i);
      }
      return decimal;
    }

    // Função para lidar com a conversão de decimal para binário
    function handleDecimalbinario() {
      const decimalInput = document.getElementById("decimal").value;
      const resultado = decimalBinario(decimalInput);
      document.getElementById("binario").value = resultado;
    }

    // Função para lidar com a conversão de binário para decimal
    function handleBinarioDecimal() {
      const binarioInput = document.getElementById("binario").value;
      const resultado = binarioDecimal(binarioInput);
      document.getElementById("decimal").value = resultado;
    }

    // Adiciona eventos aos botões de conversão
    document.getElementById("btnDecimalBinario").addEventListener("click", handleDecimalbinario);
    document.getElementById("btnBinarioDecimal").addEventListener("click", handleBinarioDecimal);
