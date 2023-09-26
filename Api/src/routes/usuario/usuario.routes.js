import { Router } from 'express';//Permite crear seccion de rutas
import { pool } from '../../db.js';// Llama la conexion a DB
//import bcrypt from 'bcrypt'; // Encriptar las contraseñas..

const router = Router();

//Mostrar Usuarios
router.get('/api/usuario/mostrar', async (req, res) => {
    try {
        const [resultado] = await pool.query(
            'SELECT * FROM usuario AS result',
        );
        res.json(resultado);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'No se pudo obtener usuarios' });
    }
});

//Mostrar un Usuario
router.get('/api/usuario/mostrar/:id', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuario WHERE id_usu = ?', [req.params.id]);
        if (rows.length <= 0) return res.status(404).json({ message: 'La Identificacion no Existe' });
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener información de este usuario:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener la información de este usuario.' });
    }
});

//Registrar usuario -- APROBADO --
router.post('/api/usuario/registrar', async (req, res) => {
    const { nombre, apellido, usuario, correo, contrasena, celular } = req.body;
    try {
        // Verificar si ya existe usuario o correo en la base de datos
        const [existingUsers] = await pool.query(
            'SELECT * FROM usuario WHERE usuario = ? OR correo = ?',
            [usuario, correo]
        );
        if (existingUsers.length > 0) {
            // Si ya existe alguno de los campos, devuelve un mensaje de error
            return res.status(400).json({ error: 'Usuario o Correo ya Registrados' });
        }

        // Generar un hash de la contraseña
        //const hashedPassword = await bcrypt.hash(contrasena, 10); // 10 es el número de rondas de hash
        // Si no existe ninguno de los campos, procede a insertar el nuevo usuario
        const [result] = await pool.query(
            'INSERT INTO usuario (nombre, apellido, usuario, correo, contrasena, celular) VALUES (?, ?, ?, ?, ?, ?)',
            [nombre, apellido, usuario, correo, contrasena, celular] //
        );

        res.json({ message: 'Usuario Registrado Correctamente' });
    } catch (error) {
        console.error('Error al registrar Usuario:', error);
        res.status(500).json({ error: 'No se pudo insertar el Usuario' });
    }
});

//Actualizar usuario -- APROBADO --
router.put('/api/usuario/actualizar/:usuario', async (req, res) => {
    const { usuario } = req.params;
    const { nombre, apellido, correo, contrasena, celular } = req.body;

    try {
        // Generar un hash de la nueva contraseña
        //const hashedPassword = await bcrypt.hash(contrasena, 10); // 10 es el número de rondas de hash

        const [result] = await pool.query(
            'UPDATE usuario SET nombre = ?, apellido = ?, correo = ?, contrasena = ?, celular = ? WHERE usuario = ?',
            [nombre, apellido, correo, contrasena, celular, usuario] //hashedPassword
        );
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Este Usuario No Existe' });
        } else {
            res.json({ message: 'Usuario Actualizado Exitosamente' });
        }
    } catch (error) {
        console.error('Error al actualizar el Usuario:', error);
        res.status(500).json({ error: 'No se pudo actualizar el Usuario' });
    }
});

//Borrar Usuario --Full---
router.delete('/api/usuario/eliminar/:usuario', async (req, res) => {
    const usuario = req.params.usuario;
    try {
        const [result] = await pool.query('DELETE FROM usuario WHERE usuario = ?', [usuario]);

        if (result.affectedRows <= 0) return res.status(404).json({ message: 'No existe este Usuario' });

        res.send('Usuario Eliminado Exitosamente');
    } catch (error) {
        console.error('Error al eliminar el Usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Login usuario
router.post('/api/usuario/login', async (req, res) => {
    const { usuario, contrasena } = req.body;
    try {
      // Verificar si existe un usuario con el nombre de usuario proporcionado
      const [existingUsers] = await pool.query(
        'SELECT * FROM usuario WHERE usuario = ?',
        [usuario]
      );
      // Comprobar si se encontró un usuario
      if (existingUsers.length === 0) {
        return res.status(404).json({ message: 'Usuario incorrecto' });
      }
  
      // Comparar la contraseña proporcionada con el hash almacenado en la base de datos
      const user = existingUsers[0];
      const passwordMatch = (contrasena === user.contrasena);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
      }
  
      // Autenticación exitosa, almacenar la información del usuario en una variable
      const userInfo = {
        id_usu: user.id_usu, // ID del usuario en DB
        usuario: user.usuario,
        correo: user.correo,
        contrasena: user.contrsena,        
      };
      console.log(userInfo);
  
      // Devolver la información del usuario en la respuesta JSON
      res.json(userInfo);
    } catch (error) {
      console.error('Error al Ingresar:', error);
      res.status(500).json({ error: 'No se pudo ingresar debido a un error interno' });
    }
  });
   

export default router; 