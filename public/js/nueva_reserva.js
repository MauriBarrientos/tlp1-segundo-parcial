
const formNuevaReserva = document.querySelector('#formNuevaReserva');

formNuevaTarea.addEventListener('submit', async (e) => {
    e.preventDefault();

    
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const fecha = document.querySelector('#fecha').value;

    const nuevaReserva = {
        nombre,
        apellido,
        fecha
    }

    try {
        const res = await fetch('http://localhost:4000/api/crear_reserva', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(nuevaReserva)
        });

        const data = await res.json();
        console.log({ data });
        formNuevaReserva.reset();
        
        Swal.fire({
            icon: 'success',
            title: 'Reserva creada',
            text: 'La reserva se ha creado correctamente'
        })

      setTimeout(() => {
        window.location.href = '/reserva';
      }, 2000);
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message
        })
    }
})