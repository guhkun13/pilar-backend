import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const DBconfig: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'db-sqlite',
  entities: ['dist/src/**/entities/*.entity{.js,.ts}'],
  synchronize: true,

  // uncomment for production, use migrations instead of sync
  // synchronize: false,
  // migrations: ['dist/src/db/migrations/*.js'],
  // cli: {
  //   migrationsDir: 'src/db/migrations',
  // },
};

export default DBconfig;
