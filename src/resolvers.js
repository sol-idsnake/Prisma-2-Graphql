const Query = {
	challenges: (parent, args, context, info) => {
		return context.prisma.challenge.findMany();
	},
};

const Mutation = {};

module.exports = { Mutation, Query };
