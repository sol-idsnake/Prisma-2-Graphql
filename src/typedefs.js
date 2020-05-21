const { gql } = require("apollo-server");

const typeDefs = gql`
	# Your schema will go here
	type Challenge {
		id: String
		title: String
		completed: Boolean
	}

	type Query {
		challenges: [Challenge!]
	}

	type Mutation {
		challenge(title: String!): Challenge!
	}
`;

module.exports = typeDefs;
