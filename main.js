function consultaEndereco () {
  let cep = document.querySelector('#cep').value;

  if (cep.length !== 8) {
    alert('CEP invalido!');
    return;
  }
  let url = `https://viacep.com.br/ws/${cep}/json/`;
  fetch(url).then(function(response){
    response.json().then(mostrarEndereço)
    })
}

function mostrarEndereço(dados) {
  let resultado = document.querySelector('#resultado')
  if (dados.erro){
  resultado.innerHTML = 'Endereço não encontrado'
  } else {

  resultado.innerHTML = `<p>Bairro: ${dados.bairro}</p>
  <p>Cep: ${dados.cep}</p>
  <p>DDD: ${dados.ddd}</p>
  <p>Cidade: ${dados.localidade}</p>
  <p>Endereço: ${dados.logradouro}</p>
  <p>Estado: ${dados.uf}</p>
  `
  }
}
