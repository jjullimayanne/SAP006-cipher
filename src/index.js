



import cipher from './cipher.js';

const deslocamento = document.getElementById("chave");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");
const click = document.getElementById("click");
const clickDec = document.getElementById("descifrar");
const primeMsg = document.getElementById("hello");

function cifrado() {
    primeMsg.value = "Quer uma nova senha?";

  /*document.getElementById("saludo").innerHTML = mensajeDefault.value;/*/
  document.getElementById("hello").innerHTML = primeMsg.value;

  const textoDigitado = texto.value;

  //strint + parseInt retorna um inteirou 
  const valorDeslocamento = parseInt(deslocamento.value);
  if (valorDeslocamento> 0) {           
    const textoCifrado = document.getElementById("cifrado");
    textoCifrado.value = cipher.encode(valorDeslocamento, textoDigitado );
    document.getElementById("cifrado").innerHTML = textoCifrado.value;
  }
  else {
    textoCifrado.value = cipher.decode(valorDeslocamento, textoDigitado );
    document.getElementById("cifrado").innerHTML = textoCifrado.value;
  }
}

function decifrar() {
  const textoADecifrar = document.getElementById("cifrado");
  const textoDecifrado = textoADecifrar.value;
  const valorDeslocamento = - parseInt(deslocamento .value); 
  textoADecifrar.value = cipher.decode(valorDeslocamento, textoDecifrado);
  document.getElementById("cifrado").innerHTML = textoADecifrar.value;

  /*while () {
    textoDecifrado.value = cipher.decode(valorDeslocamento, textoADecifrar);
    document.getElementById("cifrado").innerHTML = textoDecifrado.value;

  }*/
}

 //aparecer mensagem na tela quando licar no botão (addeventlistner)
function mostrar() {
  const textodigitado = texto.value;
  if (textodigitado == '') {
    alert('Coloque sua mensagem!');
  }
  else {
    if (document.getElementById('container_2').style.display == 'none') {
      document.getElementById('container_2').style.display = 'flex';
    }
    else {
      document.getElementById('container_2').style.display = 'flex';
    }
  }
}


//clicara mostra a mensagem cifrada 
//clicar nao cifrado mostra a mensagem decifrada 

click.addEventListener("click", mostrar);
click.addEventListener("click", cifrado);

clickDec.addEventListener("click", mostrar);
clickDec.addEventListener("click", decifrar);