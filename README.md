# restaurant-delivery-app

to get db working with PostgreSQL
you must get installed PostgreSQL server and have created a `restaurants` DB

`yarn` or `npm install`

- `node_modules/.bin/sequelize db:migrate`
- `node_modules/.bin/sequelize dbseed:all`

need to have installed and running rabbitMQ to save message queues

Start server: `database="restaurants" host="127.0.0.1" username={your_db_user} password={your_db_pass} npm run start:dev`
