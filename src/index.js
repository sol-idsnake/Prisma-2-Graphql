const { ApolloServer, makeExecutableSchema } = require("apollo-server");
const prisma = require("./db");
const resolvers = require("./resolvers");
const typeDefs = require("./typedefs");

require("dotenv").config();

console.clear();

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

const server = new ApolloServer({
	schema,
	formatError: (err) => {
		// Enable in Production:
		if (process.env.NODE_ENV === "production") {
			// Don't give the specific errors to the client.
			if (err.message.startsWith("Database Error: ")) {
				return new Error("Internal server error");
			}
			if (err.originalError instanceof AuthenticationError) {
				return new Error("Different authentication error message!");
			}
			if (err.originalError instanceof ValidationError) {
				return new Error("Different authentication error message!");
			}
		}
		// Otherwise return the original error.  The error can also
		// be manipulated in other ways, so long as it's returned.
		return err;
	},
	context: { prisma },
	tracing: true,
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
