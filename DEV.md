npx create-next-app@latest
Need to install the following packages:
create-next-app@15.3.4
Ok to proceed? (y) y

✔ What is your project named? … portfolio
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack for `next dev`? … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
✔ What import alias would you like configured? … @/*
Creating a new Next.js app in /Users/rishavraj/Rishav_portfolio/portfolio.

Using npm.

Initializing project with template: app-tw 


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- @tailwindcss/postcss
- tailwindcss
- eslint
- eslint-config-next
- @eslint/eslintrc



<!-- backend setup 
  run `npm fund` for details
(base) rishavraj@MacBookAir Rishav_portfolio % npm install prisma tsx --save-dev

added 13 packages, and audited 37 packages in 48s

8 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
(base) rishavraj@MacBookAir Rishav_portfolio % npm install @prisma/extension-accelerate @prisma/client

added 3 packages, and audited 40 packages in 19s

8 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
(base) rishavraj@MacBookAir Rishav_portfolio % npx prisma init --db --output ../app/generated/prisma
Fetching latest updates for this subcommand...
This will create a project for you on console.prisma.io and requires you to be authenticated.
✔ Would you like to authenticate? Yes
✔ Select an authentication method Google
Authenticating to Prisma Platform via browser.

Visit the following URL in your browser to authenticate:
https://console.prisma.io/auth/cli?state=eyJjbGllbnQiOiJwcmlzbWEtY2xpLWluaXQvMC40LjAgKFNpZ25hdHVyZTogZDYyZDEzMDQtOGFlNy00YmM2LThlNTYtZGI1NWQ4YmIwNThmKSIsImNvbm5lY3Rpb24iOiJnb29nbGUiLCJyZWRpcmVjdFRvIjoiaHR0cDovLzEyNy4wLjAuMTo1NTI4MC8ifQ%3D%3D
Successfully authenticated as rishavr920@gmail.com.
Let's set up your Prisma Postgres database!
✔ Select your region: us-east-1 - US East (N. Virginia)
✔ Enter a project name: Portfolio
⠋ Waiting for your Prisma Postgres database to be rea
⠙ Waiting for your Prisma Postgres database to be rea
⠹ Waiting for your Prisma Postgres database to be rea
⠸ Waiting for your Prisma Postgres database to be rea
⠼ Waiting for your Prisma Postgres database to be rea
⠴ Waiting for your Prisma Postgres database to be rea
⠦ Waiting for your Prisma Postgres database to be rea
⠧ Waiting for your Prisma Postgres database to be rea
⠇ Waiting for your Prisma Postgres database to be rea
⠏ Waiting for your Prisma Postgres database to be rea
⠋ Waiting for your Prisma Postgres database to be rea
⠙ Waiting for your Prisma Postgres database to be rea
⠹ Waiting for your Prisma Postgres database to be rea
⠸ Waiting for your Prisma Postgres database to be rea
⠼ Waiting for your Prisma Postgres database to be rea
⠴ Waiting for your Prisma Postgres database to be rea
⠦ Waiting for your Prisma Postgres database to be rea
⠧ Waiting for your Prisma Postgres database to be rea
⠇ Waiting for your Prisma Postgres database to be rea
⠏ Waiting for your Prisma Postgres database to be rea
⠋ Waiting for your Prisma Postgres database to be rea
⠙ Waiting for your Prisma Postgres database to be rea
⠹ Waiting for your Prisma Postgres database to be rea
⠸ Waiting for your Prisma Postgres database to be rea
⠼ Waiting for your Prisma Postgres database to be rea
⠴ Waiting for your Prisma Postgres database to be rea
⠦ Waiting for your Prisma Postgres database to be rea
⠧ Waiting for your Prisma Postgres database to be rea
⠇ Waiting for your Prisma Postgres database to be rea
⠏ Waiting for your Prisma Postgres database to be rea
⠋ Waiting for your Prisma Postgres database to be rea
⠙ Waiting for your Prisma Postgres database to be rea
⠹ Waiting for your Prisma Postgres database to be rea
⠸ Waiting for your Prisma Postgres database to be rea
⠼ Waiting for your Prisma Postgres database to be rea
⠴ Waiting for your Prisma Postgres database to be rea
⠦ Waiting for your Prisma Postgres database to be rea
⠧ Waiting for your Prisma Postgres database to be rea
⠇ Waiting for your Prisma Postgres database to be rea
⠏ Waiting for your Prisma Postgres database to be rea
⠋ Waiting for your Prisma Postgres database to be rea
⠙ Waiting for your Prisma Postgres database to be rea
⠹ Waiting for your Prisma Postgres database to be rea
⠸ Waiting for your Prisma Postgres database to be rea
⠼ Waiting for your Prisma Postgres database to be rea
⠴ Waiting for your Prisma Postgres database to be rea
⠦ Waiting for your Prisma Postgres database to be rea
⠧ Waiting for your Prisma Postgres database to be rea
⠇ Waiting for your Prisma Postgres database to be rea
⠏ Waiting for your Prisma Postgres database to be rea
⠋ Waiting for your Prisma Postgres database to be rea
⠙ Waiting for your Prisma Postgres database to be rea
⠹ Waiting for your Prisma Postgres database to be rea
⠸ Waiting for your Prisma Postgres database to be rea
⠼ Waiting for your Prisma Postgres database to be rea
⠴ Waiting for your Prisma Postgres database to be rea
⠦ Waiting for your Prisma Postgres database to be rea
⠧ Waiting for your Prisma Postgres database to be rea
⠇ Waiting for your Prisma Postgres database to be rea
⠏ Waiting for your Prisma Postgres database to be rea
⠋ Waiting for your Prisma Postgres database to be rea
⠙ Waiting for your Prisma Postgres database to be rea
⠹ Waiting for your Prisma Postgres database to be rea
⠸ Waiting for your Prisma Postgres database to be rea
⠼ Waiting for your Prisma Postgres database to be rea
⠴ Waiting for your Prisma Postgres database to be rea
⠦ Waiting for your Prisma Postgres database to be rea
⠧ Waiting for your Prisma Postgres database to be rea
⠇ Waiting for your Prisma Postgres database to be rea
⠏ Waiting for your Prisma Postgres database to be rea
⠋ Waiting for your Prisma Postgres database to be rea
⠙ Waiting for your Prisma Postgres database to be rea
⠹ Waiting for your Prisma Postgres database to be rea
⠸ Waiting for your Prisma Postgres database to be rea
⠼ Waiting for your Prisma Postgres database to be rea
⠴ Waiting for your Prisma Postgres database to be rea
⠦ Waiting for your Prisma Postgres database to be rea
⠧ Waiting for your Prisma Postgres database to be rea
⠇ Waiting for your Prisma Postgres database to be rea
⠏ Waiting for your Prisma Postgres database to be rea
⠋ Waiting for your Prisma Postgres database to be rea
⠙ Waiting for your Prisma Postgres database to be rea
✔ Success! Your Prisma Postgres database is ready ✅

We created an initial schema.prisma file and a .env file with your DATABASE_URL environment variable already set.

--- Next steps ---

Go to https://pris.ly/ppg-init for detailed instructions.

1. Define your database schema
Open the schema.prisma file and define your first models. Check the docs if you need inspiration: https://pris.ly/ppg-init.

2. Apply migrations
Run the following command to create and apply a migration:
npx prisma migrate dev --name init

3. Manage your data
View and edit your data locally by running this command:
npx prisma studio

...or online in Console:
https://console.prisma.io/cm5uvugvp00anqyc75ny60ifc/cmcfunh2y008oyr0x9zrx69uk/cmcfunh2y008pyr0x82hbt7vl/studio

4. Send queries from your app
To access your database from a JavaScript/TypeScript app, you need to use Prisma ORM. Go here for step-by-step instructions: https://pris.ly/ppg-init
  

(base) rishavraj@MacBookAir Rishav_portfolio % npx prisma migrate dev --name init
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "postgres", schema "public" at "accelerate.prisma-data.net"

Applying migration `20250628065236_init`

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20250628065236_init/
    └─ migration.sql

Your database is now in sync with your schema.

✔ Generated Prisma Client (v6.10.1, engine=none) to ./src/generated/p
risma in 28ms


(base) rishavraj@MacBookAir Rishav_portfolio % 
npx prisma studio
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Prisma Studio is up on http://localhost:5555
Prisma schema loaded from prisma/schema.prisma
 -->