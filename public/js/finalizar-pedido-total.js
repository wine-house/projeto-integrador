var valorFrete = 0;
var UF = '';
var valorTotalCarrinho = parseFloat(document.getElementById('valor-total-itens').textContent)

function buscaCEP(){

    var listaUF=['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']
    var valores =[16,16,16,16,16,16,12,12,13,13,13,15,15,13,12,12,10,15,16,16,15,15,14,16,10,8,16,16]
      
    //dados do CEP
      var recebeCEP = document.getElementById('cep').value
      var CEPValido = false
      
      //verifica se o campo do CEP esta preenchido
      if(recebeCEP != 0){   
        if(recebeCEP.length != 8){
          recebeCEP = "CEP Inválido"
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


            frete.innerHTML = "Valor do Frete: R$ "+ valorFrete + ",00"
            prazoDoFrete.innerHTML = prazoFrete
            var valorCarrinho = document.getElementById('valor-total-itens')
            valorCarrinho.innerHTML = " " + somaTotal.toFixed(2)
           // calculaTotal();
      }
}