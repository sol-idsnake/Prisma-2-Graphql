const { ApolloServer, makeExecutableSchema } = require("apollo-server");
const prisma = require("./db");
const resolvers = require("./resolvers");
const typeDefs = require("./typedefs");

console.clear();

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

const server = new ApolloServer({
	schema,
	context: { prisma },
	tracing: true,
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
