const inputCEP = document.querySelector('#cep');

const preencheFormulario = (endereco) => {
  document.querySelector('#endereco').value = endereco.logradouro;
  document.querySelector('#complemento').value = endereco.complemento;
};

const pesquisarCep = async() => {

  const url = `http://viacep.com.br/ws/${inputCEP.value}/json/`;

  const enderecoPesquisado = await fetch(url)
    .then(response => response.json())
    .then(responsed => responsed);

  preencheFormulario(enderecoPesquisado);
}

inputCEP.addEventListener('focusout', pesquisarCep);