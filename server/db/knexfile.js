require('dotenv').config(
  {
    path: "../.env"
  }
);

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB,
      user:     process.env.DB_USER,
      password: process.env.DB_PW
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DB,
      user:     process.env.DB_USER,
      password: process.env.DB_PW
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  }

};
