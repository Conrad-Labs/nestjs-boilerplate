# web: docker compose up
# web: npm run start:prod
release: npm i env-cmd
release: npm i tsconfig-paths
release: echo '' > .env && npm run migration:run && npm run seed:run:relational