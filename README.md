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

### Next
* ~~Filter by category~~
* ~~Add a "add event page"~~
* Add a "event page"
* Add moderation page
* Responsive Day view for mobile

### Later
* Month View
* By categories view: rows of events by categories
* Add login
* Add a "request update event page": idea -> send a code by email to update the event
* Different langage versions
* create a PWA

### Later Later...
* export to webcal
* export to a pdf image
