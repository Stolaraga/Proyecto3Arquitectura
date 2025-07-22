document.getElementById('pagoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const cliente = document.getElementById('cliente').value.trim();
  const clase = document.getElementById('clase').value.trim();
  const monto = document.getElementById('monto').value.trim();
  const fecha = document.getElementById('fecha').value;
  const metodo = document.getElementById('metodo').value;

  if (!cliente || !clase || !monto || !fecha || !metodo) {
    alert('Por favor complete todos los campos obligatorios.');
    return;
  }

  const mensaje = document.createElement('p');
  mensaje.textContent = 'Pago registrado correctamente.';
  mensaje.style.backgroundColor = '#e8f5e9';
  mensaje.style.color = '#1b5e20';
  mensaje.style.padding = '10px';
  mensaje.style.border = '1px solid #c8e6c9';
  mensaje.style.borderRadius = '5px';
  mensaje.style.marginTop = '15px';

  const prev = document.getElementById('registro-exitoso');
  if (prev) prev.remove();

  mensaje.id = 'registro-exitoso';
  document.getElementById('pagoForm').appendChild(mensaje);

  this.reset();
});
