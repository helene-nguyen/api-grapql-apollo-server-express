//~environment
import 'dotenv/config';

//~import modules
// CommonJS
// const express = require('express');
import express from 'express';
const app = express();
// CommonJS
// const { ApolloServer } = require("apollo-server-express");
import { ApolloServer } from 'apollo-server-express';

//~import schema and resolvers 
// CommonJS
// const typeDefs = require("./app/schema");
// const resolvers = require("./app/resolver");
import { schema } from './app/schema.js';
const typeDefs = schema ;

import { Query, Mutation } from './app/resolvers.js';
const resolvers = { Query, Mutation };

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const PORT = process.env.PORT ?? 3000;

//~Start Apollo Server
async function startServer() {
//Start instance Apollo Server
  await server.start();
// Link Express with Apollo server
  server.applyMiddleware({app});

    await app.listen(PORT);
    console.log(`🚀 Server launched on http://localhost:${PORT}`);

};

startServer();