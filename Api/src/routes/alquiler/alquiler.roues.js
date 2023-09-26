import { Router } from 'express';
import { pool } from '../../db.js';

const router = Router();

// Ruta para alquilar un anime o cambiar su estado
router.post('/api/anime/alquiler', async (req, res) => {
    const { cod_anime, id_usu, cambiarEstado } = req.body;

    try {
        // Obtener la fecha actual para la fecha de alquiler
        const fecha_alquiler = new Date().toISOString().slice(0, 10); // Formato YYYY-MM-DD

        // Calcular la fecha de devolución como 15 días después de la fecha de alquiler
        const fecha_devolucion = new Date();
        fecha_devolucion.setDate(fecha_devolucion.getDate() + 15);
        const fecha_devolucionString = fecha_devolucion.toISOString().slice(0, 10); // Formato YYYY-MM-DD

        // Realiza una transacción para garantizar la integridad de los datos
        const connection = await pool.getConnection();
        await connection.beginTransaction();

        if (cambiarEstado) {
            // Obtiene la cantidad actual de almacenamiento y el estado del anime
            const [animeRow] = await connection.query('SELECT cantidad_almacen, cantidad_alquilado, estado FROM anime WHERE cod_anime = ?', [cod_anime]);

            if (animeRow.length === 0) {
                await connection.rollback();
                connection.release();
                return res.status(404).json({ message: 'El Anime no Existe' });
            }

            const cantidadAlmacen = animeRow[0].cantidad_almacen;
            const cantidadAlquilado = animeRow[0].estado;

            if (cantidadAlmacen <= 0) {
                await connection.rollback();
                connection.release();
                return res.status(400).json({ message: 'Anime No Disponible por Alquiler' });
            }

            // -1 Cantidad de almacenamiento / +1 Cantidad de alquiler
            const nuevaCantidadAlmacen = cantidadAlmacen - 1;
            const nuevaCantidadAlquilado = cantidadAlquilado + 1;

            // Actualiza la cantidad de almacenamiento y el estado del anime
            await connection.query('UPDATE anime SET cantidad_almacen = ?, cantidad_alquilado = ?, estado = ? WHERE cod_anime = ?', [nuevaCantidadAlmacen, nuevaCantidadAlquilado, nuevaCantidadAlmacen >= 1 ? 1 : 0, cod_anime]);
        }

        // Inserta el registro de alquiler en la base de datos con las fechas calculadas
        await connection.query('INSERT INTO alquiler (cod_anime, id_usu, fecha_alquiler, fecha_devolucion) VALUES (?, ?, ?, ?)', [cod_anime, id_usu, fecha_alquiler, fecha_devolucionString]);

        // Confirma la transacción
        await connection.commit();
        connection.release();

        return res.status(200).json({ message: 'Anime alquilado con éxito' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
});

export default router;

