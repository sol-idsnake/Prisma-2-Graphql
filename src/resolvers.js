// A resolver is a function that's responsible for populating the data for a single field in your schema.

const Query = {
	challenges: async (parent, args, context, info) => {
		return context.prisma.challenge.findMany();
	},
};

const Mutation = {
	challenge: async (parent, args, context, info) => {
		const challenge = await context.prisma.challenge.create({
			data: {
				title: args.title,
			},
		});

		return challenge;
	},
};

module.exports = { Mutation, Query };
