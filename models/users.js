import query from "../db/index.js";

//done
export async function getUsers() {
	const data = await query(`SELECT * FROM users;`);
	return data.rows;
}


//done
export async function addResourcesToUser(
	user_name,
	user_email,
	user_em_contact_name_1,
	user_em_contact_email_1
) {
	const data = await query(
		`INSERT INTO users ( user_name, user_email, user_em_contact_name_1, user_em_contact_email_1 ) VALUES ( $1, $2, $3, $4 )  RETURNING *;`,
		[user_name, user_email, user_em_contact_name_1, user_em_contact_email_1]
	);
	return data.rows;
}

//done
export async function deleteUser(id) {
	const data = await query(
		`DELETE FROM users WHERE id = $1 RETURNING *;`,
		[id]
	);
	return data.rows;
}

//done
export async function getUserByID(id) {
	const data = await query(`SELECT * FROM users WHERE id = $1;`, [id]);
	return data.rows;
}

//done
export async function updateUser(id, user_name, user_email, user_em_contact_name_1, user_em_contact_email_1) { 
		const data = await query(
		`UPDATE users SET user_name=$2, user_email=$3, user_em_contact_name_1=$4, user_em_contact_email_1=$5  WHERE id = $1
		RETURNING *;`,
		[id, user_name, user_email, user_em_contact_name_1, user_em_contact_email_1]
	);
	return data.rows;
}
