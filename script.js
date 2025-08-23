
    let saldo = 0;

  function atualizarSaldo() {
    document.getElementById("saldo").innerText =
      "Saldo: R$ " + saldo.toFixed(2).replace(".", ",");
  }

  function depositar() {
    let valor = parseFloat(document.getElementById("deposito").value);
    if (isNaN(valor) || valor <= 0) {
      alert("Por favor, insira um valor válido para depositar.");
      return;
    }
    saldo += valor;
    atualizarSaldo();
    document.getElementById("deposito").value = "";
  }

  function sacar() {
    let valor = parseFloat(document.getElementById("saque").value);
    if (isNaN(valor) || valor <= 0) {
      alert("Informe um valor válido para saque!");
      return;
    }
    if (valor > saldo) {
      alert("Saldo insuficiente!");
      return;
    }
    saldo -= valor;
    atualizarSaldo();
    document.getElementById("saque").value = "";
  }

  atualizarSaldo();
