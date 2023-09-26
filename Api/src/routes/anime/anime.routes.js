import {Router} from 'express';//Permite crear seccion de rutas
import { pool } from '../../db.js';
const router = Router();

//Mostrar anime
router.get('/api/anime/mostrar', async (req, res) => {
    try {
        const [resultado] = await pool.query(
            'SELECT * FROM anime AS result',
        );
        res.json(resultado);
    } catch (error) {
        console.error('Error al obtener animes:', error);
        res.status(500).json({ error: 'No se pudo obtener animes' });
    }
});

//Mostrar un anime
router.get('/api/anime/mostrar/:id', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM anime WHERE cod_anime = ?', [req.params.id]);
        if (rows.length <= 0) return res.status(404).json({ message: 'El Id no Existe' });
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener información de este anime:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener la información de este anime.' });
    }
});


//Insertar
router.post('/api/anime/insertar', async (req, res) => {
    const { titulo, imagen, descripcion, cantidad_almacen, precio } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO anime (titulo, imagen, descripcion, cantidad_almacen, precio) VALUES (?, ?, ?, ?, ?)',
            [titulo, imagen, descripcion, cantidad_almacen, precio]
        );
        res.json({ message: 'Anime Agregado Correctamente' });
    } catch (error) {
        console.error('Error al insertar el Anime:', error);
        res.status(500).json({ error: 'No se pudo insertar el Anime' });
    }
});

//Actualizar Anime
router.put('/api/anime/actualizar/:cod_anime', async (req, res) => {
    const { cod_anime } = req.params;
    const { titulo, imagen, descripcion, cantidad_almacen, precio } = req.body;

    try {
        const [result] = await pool.query(
            'UPDATE anime SET titulo = ?, imagen = ?, descripcion = ?, cantidad_almacen = ?, precio = ? WHERE cod_anime = ?',
            [titulo, imagen, descripcion, cantidad_almacen, precio, cod_anime]
        );

        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Este Codigo No Existe' });
        } else {
            res.json({ message: 'Anime Actualizado Exitosamente' });
        }
    } catch (error) {
        console.error('Error al actualizar el anime:', error);
        res.status(500).json({ error: 'No se pudo actualizar el anime' });
    }
});

//Borar Anime
router.delete('/api/anime/eliminar/:cod_anime', async (req, res) => {
    const codAnime = req.params.cod_anime;
    try {
        const [result] = await pool.query('DELETE FROM anime WHERE cod_anime = ?', [codAnime]);

        if (result.affectedRows <= 0) return res.status(404).json({ message: 'No existe este Codigo' });

        res.send('Anime Eliminado Exitosamente');
    } catch (error) {
        console.error('Error al eliminar el anime:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

//Estado
router.put('/api/anime/estado/:cod_anime', async (req, res) => {
    const { cod_anime } = req.params;
    const { cantidad_almacen, cantidad_alquiler } = req.body;

    try {
        const [result] = await pool.query(
            'UPDATE anime SET cantidad_alquiles = ? WHERE cod_anime = ?',
            [cantidad_alquiler, cod_anime]
        );

        if (cantidad_almacen - cantidad_alquiler == 0) {
            res.status(404).json({ message: 'Este Codigo No Existe' });
        } else {
            res.json({ message: 'Anime Actualizado Exitosamente' });
        }
    } catch (error) {
        console.error('Error al actualizar el anime:', error);
        res.status(500).json({ error: 'No se pudo actualizar el anime' });
    }
});


export default router; 