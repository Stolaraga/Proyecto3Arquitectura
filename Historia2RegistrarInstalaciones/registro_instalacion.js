document.getElementById('instalacionForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const capacidad = document.getElementById('capacidad').value.trim();
  const ubicacion = document.getElementById('ubicacion').value.trim();
  const horaInicio = document.getElementById('hora_inicio').value;
  const horaFin = document.getElementById('hora_fin').value;
  const fecha = document.getElementById('fecha').value;

  if (!nombre || !capacidad || !ubicacion || !horaInicio || !horaFin || !fecha) {
    alert('Por favor complete todos los campos obligatorios.');
    return;
  }

  if (horaFin <= horaInicio) {
    alert('La hora de fin debe ser posterior a la hora de inicio.');
    return;
  }

  const mensaje = document.createElement('p');
  mensaje.textContent = 'Instalación registrada correctamente.';
  mensaje.style.backgroundColor = '#d4edda';
  mensaje.style.color = '#155724';
  mensaje.style.padding = '10px';
  mensaje.style.border = '1px solid #c3e6cb';
  mensaje.style.borderRadius = '5px';
  mensaje.style.marginTop = '15px';

  const prev = document.getElementById('registro-exitoso');
  if (prev) prev.remove();

  mensaje.id = 'registro-exitoso';
  document.getElementById('instalacionForm').appendChild(mensaje);

  this.reset();
});
