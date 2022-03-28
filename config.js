
export const db = {
	port: process.env.PG_PORT,
	host: process.env.PG_HOST,
	user: process.env.PG_USER,
	password: process.env.PG_PASSWORD,
	database: process.env.PG_DATABASE,
};

export const connectionString = process.env.DATABASE_URL;
