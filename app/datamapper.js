// CommonJS
// const client = require('./dbClient');
import { client } from './dbClient.js';

const dataMapper = {
  //~FETCH DATA
  async findAll() {
    const result = await client.query('SELECT * FROM "person";');

    return result.rows;
  },

  async findByName(name) {
    const result = await client.query(`SELECT * FROM "person" WHERE "firstname" = $1;`, [name]);

    return result.rows;
  },

  async findByDate(birthdate) {
    const result = await client.query('SELECT * FROM "person" WHERE "birthdate" = $1;', [birthdate]);

    return result.rows;
  },

  //~CREATE DATA
  async insertPerson(person) {
    const preparedQuery = `INSERT INTO "person" ("firstname", "lastname", "birthdate") VALUES ($1, $2, $3) RETURNING *;`;

    const result = await client.query(preparedQuery, [person.firstname, person.lastname, person.birthdate]);

    return result.rows[0];
  },

  //~UPDATE DATA
  async updateByName(oldName, newName) {
    console.log('oldname: ', oldName);

    const result = await client.query('UPDATE "person" SET "lastname" = $1 WHERE "lastname" = $2 RETURNING *;', [newName, oldName]);
    console.log(result.rows);
    return result.rows[0];
  },

  //~DELETE DATA
  async deleteByDate(date) {
    const preparedQuery = 'DELETE FROM "person" WHERE "birthdate" = $1 RETURNING *;';

    const result = await client.query(preparedQuery, [date]);
    console.log('Deleted : ', result.rowCount);

    let deletedInfo;

    result.rowCount === 1 ? (deletedInfo = true) : (deletedInfo = false);

    return deletedInfo;
  }
};

export { dataMapper };
