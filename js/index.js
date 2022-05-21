const user = document.getElementById('username');
const pass = document.getElementById('pass');
const btn = document.getElementById('boton');

btn.addEventListener('click', () => {

  // if(usuario.value == ''){
  //   alert('Complete su nombre');
  // } else if(!usuario.value.includes("@")) {
  //   alert('Debe contener un @');
  // } else if (pass.value == "") { 
  //   alert('Complete su contraseña');
  // } else {
  //   alert('Profe, no me funcionó el setCustomValid');
  // }
// });

  if(!user.value.includes("@")) {
    user.setCustomValidity('Debe contener un @');
  } else if(user.value == '') {
    user.setCustomValidity('Complete su nombre');
  } else if(pass.value == "") {
    pass.setCustomValidity('Complete su contraseña');
  } else {
    alert('Ingreso correcto');
  }

});
