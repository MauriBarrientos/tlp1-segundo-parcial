const ctrlReservas = {};
const Reserva = require('../models/Reserva');


ctrlReservas.crearReserva = async (req,res) => {
    const { nombre, apellido, fecha } = req.body;
    try {
    const nuevaReserva = new Reserva({
        nombre,
        apellido,
        fecha,
    });


    return res.status(201).json({
        message: 'Usuario creado exitosamente',
    });
     } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                message: error.message || 'Error al crear el usuario',
            });
        }
};

ctrlReserva.obtenerReserva = async (req, res) => {
    const { id } = req.params;

    try {
        const reserva = await Reserva.findByPk(id);

        if (!usuario) {
            throw ({
                status: 404,
                message: 'No se ha encontrado la reserva',
            })
        }

        return res.json(usuario);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message
        })
    };

}

ctrlReserva.obtenerReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll({
            where: {
                estado: true,
            }
        });

        if (!reservas) {
            throw ({
                status: 404,
                message: 'No se encontraron reservas',
            });
        }

        return res.status(200).json(usuarios);

    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message || 'Error al obtener las reservas',
        });
    }
};


ctrlReserva.actualizarReserva = async (req, res) => {

    const { id } = req.params;

    const { nombre, apellido, fecha } = req.body;


    try {

        const reservaActualizada = await Reserva.update({
            nombre,
            apellido,
            fecha
        }, {
            where: {
                id
            }
        })

        if (!usuarioActualizado) {
            throw ({
                status: 400,
                message: 'No se pudo actualizar la reserva'
            })
        }

        return res.json({
            message: 'Reserva actualizada correctamente',
            reservaActualizada
        });
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message || 'Error de servidor, contacte al area de sistemas'
        })
    }


}

ctrlReserva.eliminarReserva = async (req, res) => {

    const { id } = req.params

    try {

        const reservaEliminada = reserva.update({
            estado: false
        }, {
            where: {
                id,
                estado: true
            }
        })


        if (!usuarioEliminado) {
            throw ({
                status: 400,
                message: 'Error al eliminar la reserva'
            })
        }

        return res.json({
            message: 'Reserva eliminada con éxito',
        });
    } catch (error) {
        console.log(error);
        return res.status(error.status || 5000).json({
            message: error.message || 'Error de servidor, contacte al área de sistemas'
        })
    }

}

module.exports = ctrlReservas;