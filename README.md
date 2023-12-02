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

## TODO

* Different langage versions
* Month and day view
* By categories view
* Add login
* Add moderation page
* Day view by default on mobile
* Add a "add event page"
* Add a "request update event page"
* Add a "event page"
* create a PWA
* Filter by category
* export to webcal
* export to a pdf image
