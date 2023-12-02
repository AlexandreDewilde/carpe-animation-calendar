# 📅 Animation Calendar

## Install

```
npm install
```

Configure your .env file based on the provided .env.example file.

Initialize the database:

```shell
npx prisma migrate dev --name init
```

## Update

```
npx prisma generate
npx prisma migrate dev --name update_name --create-only
```

## Run

```shell
npm run dev
```