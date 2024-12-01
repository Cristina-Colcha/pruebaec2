document.getElementById('saludar').addEventListener('click', async () => {
    const nombre = document.getElementById('nombre').value;
    const response = await fetch(`/api/saludo/${nombre}`);
    const data = await response.json();
    document.getElementById('mensaje').innerText = data.mensaje;
  });
  