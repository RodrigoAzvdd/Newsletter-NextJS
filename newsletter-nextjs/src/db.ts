import { createPool } from 'mysql2';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'containers-us-west-43.railway.app',
  user: 'root',
  password: 'E7n7QCwamdzYwR8wXRUU',
  port: 6607,
  database: 'railway',
});

const connection = pool;

export default connection;