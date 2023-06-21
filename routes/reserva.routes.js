const router = require('express').Router();
const {
    obtenerReservas,
    crearReserva,

} = require('../controllers/reserva.controllers');


router.get('/reservas', (req, res) => {
    res.render('reserva/index');
});

router.get('/reserva/crear', (req, res) => {
    res.render('reserva/crear_reserva');
});

// Obtener todas las reservas
router.get('/api/',obtenerReservas);
 
// Crear una reserva
router.post('/api/', crearReserva);
 
// Actualizar una reserva
router.put('/api/:id',);
 
// Eliminar una reserva de forma lógica
router.delete('/api/:id',);

 
 module.exports = router;