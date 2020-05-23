const { gql } = require("apollo-server");

const typeDefs = gql`
	# Your schema will go here
	# Schema = What format has the data being sent to the client?
	type Challenge {
		id: String
		title: String!
		completed: Boolean
		createdAt: String!
		updatedAt: String!
	}

	type Ziel {
		id: String
		title: String!
		completed: Boolean
		steps: [Step!]
		createdAt: String!
		updatedAt: String!
	}

	type Step {
		id: String
		title: String!
		completed: Boolean
		zielId: String!
		createdAt: String!
		updatedAt: String!
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
