# mockup
mockup nodejs with express, squelize
Mockup yang yang mudah digunakan
1. Express  https://expressjs.com/en/guide/routing.html
2. Sequelize https://sequelize.org/docs/v6/getting-started/
    1. npx sequelize-cli db:create
    2. npx sequelize migration:generate --name create-tables
    3. npx sequelize-cli db:migrate
    4. npx sequelize-cli seed:generate --name exr_exp
    5. npx sequelize-cli db:seed:all