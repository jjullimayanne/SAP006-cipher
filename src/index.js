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

  const textoIngresado = texto.value;
  const valorDeslocamento = parseInt(deslocamento.value);
  if (valorDeslocamento> 0) {           
    const textoCifrado = document.getElementById("cifrado");
    textoCifrado.value = cipher.encode(valorDeslocamento, textoIngresado);
    document.getElementById("cifrado").innerHTML = textoCifrado.value;
  }
  else {
    textoCifrado.value = cipher.decode(valorDeslocamento, textoIngresado);
    document.getElementById("cifrado").innerHTML = textoCifrado.value;
  }
}

function decifrar() {
  const textoADecifrar = document.getElementById("texto");
  const textoDecifrado = textoADecifrar.value;
  const valorDesplazamiento = - parseInt(deslocamento .value); 
  textoADecifrar.value = cipher.decode(valorDesplazamiento, textoDecifrado);
  document.getElementById("cifrado").innerHTML = textoADecifrar.value;
  mensajeDefault.value = cipher.decode(-3, mensajeDefault.value);
  document.getElementById("cifrado").innerHTML = mensajeDefault.value;
}

function mostrar() {
  const textoIngresado = texto.value;
  if (textoIngresado == '') {
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


click.addEventListener("click", mostrar);
click.addEventListener("click", cifrado);

clickDec.addEventListener("click", mostrar);
clickDec.addEventListener("click", decifrar);