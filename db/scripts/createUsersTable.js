/*
- Import query from db/index.js 
- Write SQL query to create a table - look at the books data to decide on columns and name 
- Use our query function and hand it our SQL string inside of a createBooksTable function 
- Call our createBooksTable function
*/

import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, user_name TEXT, user_email TEXT, user_em_contact_name_1 TEXT, user_em_contact_email_1 TEXT)`;

async function createUsersTable() {
  const res = await query(sqlString);
  console.log("Created users table", res);
}


createUsersTable();

