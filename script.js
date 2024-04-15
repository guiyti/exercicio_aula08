// Função para converter um número decimal em binário
    function decimalToBinary(decimal) {
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
    function binaryToDecimal(binario) {
      let decimal = 0;
      for (let i = 0; i < binario.length; i++) {
        const bit = parseInt(binario.charAt(binario.length - 1 - i));
        decimal += bit * Math.pow(2, i);
      }
      return decimal;
    }

    // Função para lidar com a conversão de decimal para binário
    function handleDecimalToBinary() {
      const decimalInput = document.getElementById("decimal").value;
      const resultado = decimalToBinary(decimalInput);
      document.getElementById("binary").value = resultado;
    }

    // Função para lidar com a conversão de binário para decimal
    function handleBinaryToDecimal() {
      const binaryInput = document.getElementById("binary").value;
      const resultado = binaryToDecimal(binaryInput);
      document.getElementById("decimal").value = resultado;
    }

    // Adiciona eventos aos botões de conversão
    document.getElementById("btnDecimalToBinary").addEventListener("click", handleDecimalToBinary);
    document.getElementById("btnBinaryToDecimal").addEventListener("click", handleBinaryToDecimal);
