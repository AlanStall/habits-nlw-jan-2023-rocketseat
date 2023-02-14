import Fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './routes';
/* O Fastify (muito parecido com o Express) é um executor de verbos HTTP */

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
    port: 3333,
    host: '0.0.0.0',
}).then(() => {
    console.log('HTTP server running!!!')
})