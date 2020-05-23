// A resolver is a function that's responsible for populating the data for a single field in your schema.

const Query = {
	challenges: async (parent, args, context, info) => {
		return await context.prisma.challenge.findMany();
	},
	ziele: async (parent, args, context, info) => {
		return await context.prisma.ziel.findMany({ include: { steps: true } });
	},
};

const Mutation = {
	challenge: async (parent, args, context, info) => {
		if (args.title.length === 0) {
			throw new Error("Title cannot be empty");
		}

		const challenge = await context.prisma.challenge.create({
			data: {
				...args,
			},
		});

		return challenge;
	},
	ziel: async (parent, args, context, info) => {
		if (args.title.length === 0) {
			throw new Error("Title cannot be empty");
		}

		const ziel = await context.prisma.ziel.create({
			data: {
				...args,
			},
		});

		return ziel;
	},
	step: async (parent, args, context, info) => {
		if (args.title.length === 0) {
			throw new Error("Title cannot be empty");
		} else if (args.zielId.length === 0) {
			throw new Error("Parent Id  cannot be empty");
		}

		const step = await context.prisma.step.create({
			data: {
				title: args.title,
				ziel: {
					connect: {
						id: args.zielId,
					},
				},
			},
		});

		return step;
	},
};

module.exports = { Mutation, Query };
