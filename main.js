const encriptar = document.querySelector('.enc');
const encriptarTexto = document.querySelector('.text');
const desencriptar = document.querySelector('.des');
const respuesta = document.querySelector('.encript');
const contenido = document.querySelector('.contenido-box');
const visible = document.querySelector('.visible');
const copiar = document.querySelector('.copy');

encriptar.addEventListener('click', (e) => {
  e.preventDefault();
  let texto = encriptarTexto.value;
  let txt = texto
    .normalize('NFD')
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, '');

  texto = texto.replace(/e/gm, 'enter');
  texto = texto.replace(/i/gm, 'imes');
  texto = texto.replace(/a/gm, 'ai');
  texto = texto.replace(/o/gm, 'ober');
  texto = texto.replace(/u/gm, 'ufat');

  respuesta.innerHTML = texto;
  visible.style.display = 'block';
  contenido.remove();
});

desencriptar.addEventListener('click', (e) => {
  e.preventDefault();
  let texto = encriptarTexto.value;
  let txt = texto
    .normalize('NFD')
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, '');

  texto = texto.replace(/enter/gm, 'e');
  texto = texto.replace(/imes/gm, 'i');
  texto = texto.replace(/ai/gm, 'a');
  texto = texto.replace(/ober/gm, 'o');
  texto = texto.replace(/ufat/gm, 'u');

  respuesta.innerHTML = texto;
  visible.style.display = 'block';
  contenido.remove();
});

copiar.addEventListener('click', (e) => {
  e.preventDefault();
  let copiar = respuesta;
  copiar.select();
  document.execCommand('copy');
});
