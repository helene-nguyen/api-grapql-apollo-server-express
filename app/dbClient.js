import pg from 'pg';

const client = new pg.Client();
client.connect();

export {client};
