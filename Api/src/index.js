import express from 'express';
import cors from 'cors';// Importo cors para intercambio de recursos 14/09/23
import animeRoutes from './routes/anime/anime.routes.js';
import usuarioRoutes from './routes/usuario/usuario.routes.js'
import alquilerRoutes from './routes/alquiler/alquiler.roues.js'

const app = express()

app.use(express.json());
app.use(cors()); // Llamo a cors para utilizarlo 14/09/23

//Rutas =>
app.use(animeRoutes);
app.use(usuarioRoutes);
app.use(alquilerRoutes);


app.listen(3000);
console.log('Server Ejecutandoce en el Puerto => 3000');