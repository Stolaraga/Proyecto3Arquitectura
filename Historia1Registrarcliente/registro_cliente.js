

document.getElementById('clienteForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const contrasena = document.getElementById('contrasena').value.trim();
  const telefono = document.getElementById('telefono').value.trim();

  if (!nombre || !correo || !contrasena || !telefono) {
    alert('Por favor complete todos los campos obligatorios.');
    return;
  }

  if (!/^[0-9]{8,15}$/.test(telefono)) {
    alert('El número de teléfono debe tener entre 8 y 15 dígitos.');
    return;
  }

  const mensaje = document.createElement('p');
  mensaje.textContent = 'Cliente registrado correctamente.';
  mensaje.style.backgroundColor = '#d4edda';
  mensaje.style.color = '#155724';
  mensaje.style.padding = '10px';
  mensaje.style.border = '1px solid #c3e6cb';
  mensaje.style.borderRadius = '5px';
  mensaje.style.marginTop = '15px';
  document.getElementById('clienteForm').appendChild(mensaje);

  this.reset();
});
