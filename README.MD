# This project aims at creating a working solution using Prisma (@prisma/client)

## Prisma

    - npm i @prisma/cli
    - npx prisma init
    - change .env variable to Amazon RDS instance
    - add model to prisma/schema.prisma
    - npx prisma migrate save --experimental
    - npx prisma migrate up -- experimental
    - npx prisma generate

    - Use `npm run dev` to use the Prisma Studio (experimental), or `npm start` to use the graphql playground
