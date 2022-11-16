window.addEventListener('load', function() {
  let formulario = document.querySelector('form.form');
  const nome = document.querySelector('input.nome');
  const nameError = document.getElementById('nameError');
  const descricao = this.document.querySelector('textarea.descricao');
  const descricaoError = document.getElementById('descricaoError');
  const precoError = document.getElementById('precoError');
  const preco = document.querySelector('input.preco');
  const categoria = document.querySelectorAll('radio');
  const categoriaError = document.getElementById('categoriaError');
  const categoriaBranco = document.getElementById('branco');
  const categoriaRose = document.getElementById('rose');
  const categoriaTinto = document.getElementById('tinto');
  const categoriaEspumante = document.getElementById('espumante');
  const imgError = document.getElementById('imgError');
  const imgProduto = document.querySelector('input.btn-cadastro-prod');


  let foto = document.getElementById('imgFoto');
  let inputFoto = document.getElementById('file');

  foto.addEventListener('click', () => {
    inputFoto.click()
  })
  
  inputFoto.addEventListener('change', (e) => {
    e.preventDefault();
    console.log(e);
    let reader = new FileReader();
  
    reader.onload = () => {
      foto.src = reader.result;
    }
  
    reader.readAsDataURL(inputFoto.files[0]);
  })

// VALIDAÇÕES
  // Validação campo nome
  nome.addEventListener("keypress", (e) => {
    let keyCode = (e.keyCode ? e.keyCode : e.which);
    nameError.style.display = 'none';
    nome.style.marginBottom = '2rem';
    if (keyCode > 47 && keyCode < 58) {
      e.preventDefault();
      this.alert("não é permitido números")
      errorsMessages.push("não é permitido números");
    }
  })
    // Validação campo descrição
  descricao.addEventListener("keypress", (e) => {
    descricaoError.style.display = 'none';
    descricao.style.marginBottom = '2rem';
  })

  preco.addEventListener("keypress", (e) => {
    precoError.style.display = 'none';
    preco.style.marginBottom = '2rem';
  })

  categoriaBranco.addEventListener("click", (e) => {
    categoriaError.style.display = 'none';
  })

  categoriaRose.addEventListener("click", (e) => {
    categoriaError.style.display = 'none';
  })

  categoriaTinto.addEventListener("click", (e) => {
    categoriaError.style.display = 'none';
  })

  categoriaEspumante.addEventListener("click", (e) => {
    categoriaError.style.display = 'none';
  });

  imgProduto.addEventListener("click", (e) => {
    imgError.style.display = 'none';
  })

  formulario.addEventListener('submit', function(event) {
    event.preventDefault();

      if (!nome.value) {
        nameError.style.display = 'flex';
        nome.style.marginBottom = '0px';
      } 
      
      if(!descricao.value) {
        descricaoError.style.display = 'flex';
        descricao.style.marginBottom = '0px';
      }

      if (preco.value <= 0) {
        precoError.style.display = 'flex';
        preco.style.marginBottom = '0px';
      } 
      
      if(!categoria.value) {
        categoriaError.style.display = 'flex';
      }

      if(imgProduto.files.length == 0) {
        imgError.style.display = 'flex';
      }
    
  })
  
  
})