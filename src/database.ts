import { createPool } from "mysql2/promise";

export async function conect() {
   const connection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'mode_mysql_ts',
        connectionLimit: 10
    });
    return connection;
}