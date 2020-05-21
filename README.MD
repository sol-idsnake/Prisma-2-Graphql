# This boilerplate uses Prisma 2.x and Apollo Server 2.x

## Prisma

    - npm i @prisma/cli
    - npx prisma init
    - change .env variable to Amazon RDS instance or local DB instance
    - add model to prisma/schema.prisma

### After any changes to the `schema.prisma`, afterwards run:

    - npx prisma migrate save --experimental
    - npx prisma migrate up -- experimental
    - npx prisma generate

This will update the schema on the databse, and reflect those changes in your Prisma Client.

Use `npm run dev` to use the Prisma Studio (experimental), or `npm start` to use the graphql playground

### Where to go from here?

In order to customize this project for your own needs, you'd typically follow these steps:

    - add/remove/change the data found in prisma/schema.prisma
    - migrate those changes to your database
    - adjust your typedefs
    - adjust your resolvers

That's it!

TODO: Create graphql endpoints
