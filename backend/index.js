import express from 'express'
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors'
import { createServer } from 'http';
import { schema } from './src/schema';
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv';
const jsonwebtoken = require('jsonwebtoken')

var account = require('./src/routes/account');
const app = express()
app.use('/account', account);
app.use(cors())
dotenv.config({ silent: true });

const MONGO_URL = process.env.MONGO_URL
const MONGO_USER = process.env.MONGO_USER
const MONGO_SECRET = process.env.MONGO_SECRET
const homePath = process.env.HOME_PATH;
const URL = process.env.URL
const PORT = process.env.PORT

const server = new ApolloServer({
    schema: schema,
    context: async ({ req }) => {
        const token = req.headers.authorization || '';
        let mongo, user;
        if (!mongo) {
            const client = await MongoClient.connect(`mongodb://${MONGO_USER}:${MONGO_SECRET}@ds131296.mlab.com:31296/chinguflow`, { useNewUrlParser: true })
            mongo = client.db('chinguflow');
            if (token) {
                user = await getUser(token, mongo);
            }
        }
        return { mongo, user };
    },
});

server.applyMiddleware({ app, path: homePath });
const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);
httpServer.listen({ port: PORT }, () => {
    console.log(`Visit ${URL}:${PORT}${homePath}`)
});

async function getUser(token, mongo) {
    const { ok, result } = await new Promise((resolve) =>
        jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, result) => {
            if (err) {
                resolve({ ok: false, result: err });
            } else {
                resolve({ ok: true, result });
            }
        })
    );
    if (ok) {
        return await mongo.collection('User').findOne({ rememberToken: token });
    } else {
        console.error(result);
        return null;
    }
}

