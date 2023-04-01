var valorFrete = 0;
var UF = '';
var frete = document.getElementById('frete')
var valorTotalCarrinho = parseFloat(document.getElementById('valor-total-itens').textContent)

function buscaCEP(){

    var listaUF=['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']
    var valores =[10,12,22,45,54,32,21,80,66,43,33,39,67,27,38,90,47,32,51,38,56,73,63,99,93,28,87,75]
      
    //dados do CEP
      var recebeCEP = document.getElementById('cep')
      var CEPValido = false
      
      //verifica se o campo do CEP esta preenchido
      if(recebeCEP.value != 0){   
        if(recebeCEP.value.length != 8){
          recebeCEP.value = "CEP Inválido"
        }
      }
            
         var requestURL = 'https://viacep.com.br/ws/' + recebeCEP.value + '/json'
        
          var request = new XMLHttpRequest()
          request.open('GET', requestURL)
          request.responseType = 'json'
          request.send()
    
         
          request.onload = async() =>{
            var meu_callback = await request.response;
            var valor = 0;
            for(var x=0; x<27;x++){
             if(meu_callback.uf == listaUF[x]){
              valor=valores[x]
              UF = listaUF[x]
             }
            }
    
            valorFrete = valor;
            console.log("Valor do Frete é: " + valorFrete + ",00")
            console.log("Teste valor total do carrinho " + valorTotalCarrinho)
            var somaTotal = valorTotalCarrinho + valorFrete
            console.log(somaTotal.toFixed(2))


            frete.innerHTML = "Total de tudo com frete é: "+ valorFrete + ",00"

            var valorCarrinho = document.getElementById('valor-total-itens')
            valorCarrinho.innerHTML = " " + somaTotal.toFixed(2)
           // calculaTotal();
      }
}