import query from "../index.js";
import { userData } from "../../libs/data.js";

async function populateUsersTable() {
  for (let i = 0; i < userData.length; i++) {
    const user_name = userData[i].user_name;
    const user_email = userData[i].user_email;
    const user_em_contact_name_1 = userData[i].user_em_contact_name_1;
    const user_em_contact_email_1 = userData[i].user_em_contact_email_1;

    const res = await query(
      `INSERT INTO users (user_name, user_email, user_em_contact_name_1, user_em_contact_email_1) VALUES ($1, $2, $3, $4) RETURNING *`,
      [user_name, user_email, user_em_contact_name_1, user_em_contact_email_1]
    );
    console.log(res);
  }
}


populateUsersTable();

