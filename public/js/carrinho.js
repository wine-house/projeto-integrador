

const fretePorRegiao = {
    "São Paulo": 10,
    "Rio de Janeiro": 15,
    "Minas Gerais": 20,
    "Outros Estados": 30
  };
  
  const form = document.getElementById('regiao-entrega');
//   console.log(form.options[0].value)

 
  form.addEventListener("change", function() {
   
    const regiaoEntrega = form.value;
    console.log(regiaoEntrega)
    const valorFrete = fretePorRegiao[regiaoEntrega];
    const resultadoFrete = document.getElementById("resultado-frete");
    resultadoFrete.innerText = `O valor do frete é R$${valorFrete}`

  });