import pg from 'pg';

const pool = new pg.pool({
    user: 'user',
    host: 'host',
    password: 'password',
    port: Number('port'),
    database: 'database',
});

 export const query = (text, params) => pool.query(text, params);

