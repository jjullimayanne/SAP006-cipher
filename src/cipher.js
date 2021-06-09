
const cipher = {

  //codificar
  encode: function (offset, string) {
    let txt = "";
    for (let i = 0; i < string.length; i++) {

      //todas as letras asc ficam entre 65 e 90

      //codigo da letra charCodeat
      //(codigo da letra  + descoc)  % tamanho do alfabeto ~volta (mod)
      let valor = string.charCodeAt(i);
      //todas as letras asc ficam entre 65 e 90
      if (valor >= 65 && valor <= 90) {

        //alfabeto + 0 =26
        txt += String.fromCharCode((valor - 65 + parseInt(offset)) % 26 + 65);

        //especial 
      } else if (valor >= 97 && valor <= 122) {
        txt += String.fromCharCode((valor - 97 + parseInt(offset)) % 26 + 97);
      } else {
        txt += string[i];
      }
    }
    return txt;
  },





  //decodificar
  decode: function (offset, string) {
    let txt = "";
    for (let i = 0; i < string.length; i++) {
      let valor = string.charCodeAt(i);
      if (valor >= 65 && valor <= 90) {
        txt += String.fromCharCode((valor - 90 + parseInt(offset)) % 26 + 90);
      } else if (valor >= 97 && valor <= 122) {
        txt += String.fromCharCode((valor - 122 + parseInt(offset)) % 26 + 122);
      } else {
        txt += string[i];
      }
    }
    return txt;
  }
}
