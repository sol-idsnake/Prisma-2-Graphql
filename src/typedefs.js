const { gql } = require("apollo-server");

const typeDefs = gql`
	# Your schema will go here
	type Challenge {
		id: String
		title: String!
		completed: Boolean
		createdAt: Int!
		updatedAt: Int!
	}

	type Ziel {
		id: String
		title: String!
		completed: Boolean
		steps: [Step!]
		createdAt: Int!
		updatedAt: Int!
	}

	type Step {
		id: String
		title: String!
		completed: Boolean
		zielId: String!
		createdAt: Int!
		updatedAt: Int!
	}

	type Query {
		challenges: [Challenge!]
		ziele: [Ziel!]
	}

	type Mutation {
		challenge(title: String!, completed: Boolean): Challenge!
		ziel(title: String!): Ziel!
		step(title: String!, zielId: String!): Step!
	}
`;

module.exports = typeDefs;
