let usuario = document.getElementById('usuario');
let pass = document.getElementById('pass');
const btn = document.getElementById('boton')

btn.addEventListener('click', (e) => {
  e.preventDefault();



  if (pass.value == ""){
    alert('Complete su contraseña');
  } else if(usuario.value == ''){
    alert('Complete su nombre');
  } else if(!usuario.value.includes("@")){
    alert('Debe contener un @');
  } 
});
