import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    password: "bGaA6g6AG1Bc114adcCbf*-52E61af-f",
    host: "viaduct.proxy.rlwy.net",
    port: 48722,
    database: "railway",
});

export default pool;