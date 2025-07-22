document.getElementById('claseForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const entrenador = document.getElementById('entrenador').value.trim();
  const cupo = document.getElementById('cupo').value.trim();
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const ubicacion = document.getElementById('ubicacion').value.trim();
  const precio = document.getElementById('precio').value.trim();

  if (!nombre || !entrenador || !cupo || !fecha || !hora || !ubicacion || !precio) {
    alert('Por favor complete todos los campos obligatorios.');
    return;
  }

  const mensaje = document.createElement('p');
  mensaje.textContent = 'Clase registrada correctamente.';
  mensaje.style.backgroundColor = '#f1f8e9';
  mensaje.style.color = '#33691e';
  mensaje.style.padding = '10px';
  mensaje.style.border = '1px solid #c5e1a5';
  mensaje.style.borderRadius = '5px';
  mensaje.style.marginTop = '15px';

  const prev = document.getElementById('registro-exitoso');
  if (prev) prev.remove();

  mensaje.id = 'registro-exitoso';
  document.getElementById('claseForm').appendChild(mensaje);

  this.reset();
});
