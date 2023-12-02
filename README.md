# Calendrier de l'animation

## Install

```
npm install

```

Configure .env file based on the .env.example file

init database

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
