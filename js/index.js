let usuario = document.getElementById('usuario');
let pass = document.getElementById('pass');
const btn = document.getElementById('boton')

btn.addEventListener('click', () => {
  
  if(usuario.value == ''){
    usuario.setCustomValidity('Complete su nombre');
  } else if(!usuario.value.includes("@")){
    usuario.setCustomValidity('Debe contener un @');
  } else if(pass.value == ""){
    pass.setCustomValidity('Complete su contraseña');
  } else {
    usuario.setCustomValidity('');
    pass.setCustomValidity('');
  }
});
