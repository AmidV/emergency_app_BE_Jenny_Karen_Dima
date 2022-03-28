import express from "express";
const router = express.Router();

import {
	getUsers,
	addResourcesToUser,
	deleteUser,
	getUserByID,
	updateUser,
} from "../models/users.js";

//done
router.get("/", async (req, res) => {
	const allWeeks = await getUsers();
	res.json({ success: true, message: `all user`, payload: allWeeks });
});

//done
router.get("/:id", async (req, res) => {
	const id = Number(req.params.id);
	const resources = await getUserByID(id);
	res.json({
		success: true,
		message: `all resources requested for a user ${id}`,
		payload: resources,
	});
});

//done
router.post("/:id/resources", async function (req, res) {
	user_name, user_email, user_em_contact_name_1, user_em_contact_email_1
	const user_name = req.body.user_name;
	const user_email = req.body.user_email;
	const user_em_contact_name_1 = req.body.user_em_contact_name_1;
	const user_em_contact_email_1 = req.body.user_em_contact_email_1;
	const resources = await addResourcesToUser(
		user_name,
		user_email,
		user_em_contact_name_1,
		user_em_contact_email_1
	);
	res.json({
		success: true,
		message: `new user created`,
		payload: resources,
	});
});

//done
router.delete("/:id", async function (req, res) {
	const id = Number(req.params.resourceid);
	const resource = await deleteUser(id);
	res.json({
		success: true,
		message: `deleted a user ${id} `,
		payload: resource,
	});
});

/* UPDATE specific user */
router.put("/:id", async (req, res) => {
	const id = Number(req.params.id);
	//extract the data from the register user form on client , sent via req.body
	const { 
		user_name,
		user_email,
		user_em_contact_name_1,
		user_em_contact_email_1 
	} = req.body;
  
	const updatedUser = await updateUser(
	  id,
	  user_name,
	  user_email,
	  user_em_contact_name_1,
	  user_em_contact_email_1
	);
  
	res.json({
	  message: `user details updated successfully`,
	  success: true,
	  payload: updatedUser,
	});
  });
  

export default router;
