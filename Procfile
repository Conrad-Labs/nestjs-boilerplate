# web: docker compose up
release: npm i env-cmd
release: npm i tsconfig-paths
web: npm run start:prod
release: echo '' > .env && npm run migration:run && npm run seed:run:relational