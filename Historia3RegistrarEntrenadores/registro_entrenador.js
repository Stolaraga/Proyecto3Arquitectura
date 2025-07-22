document.getElementById('entrenadorForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const disciplina = document.getElementById('disciplina').value.trim();
  const estado = document.getElementById('estado').value;

  if (!nombre || !email || !telefono || !disciplina || !estado) {
    alert('Por favor complete todos los campos obligatorios.');
    return;
  }

  const mensaje = document.createElement('p');
  mensaje.textContent = 'Entrenador registrado correctamente.';
  mensaje.style.backgroundColor = '#d4edda';
  mensaje.style.color = '#155724';
  mensaje.style.padding = '10px';
  mensaje.style.border = '1px solid #c3e6cb';
  mensaje.style.borderRadius = '5px';
  mensaje.style.marginTop = '15px';

  const prev = document.getElementById('registro-exitoso');
  if (prev) prev.remove();

  mensaje.id = 'registro-exitoso';
  document.getElementById('entrenadorForm').appendChild(mensaje);

  this.reset();
});
