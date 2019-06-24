import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from "../types";

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: "Fake Name",
				email: "fake@fake.com",
				phone: "111-111-1111",
				type: "personal"
			},
			{
				id: 2,
				name: "Fake Guy",
				email: "fakeguy@fake.com",
				phone: "222-111-1111",
				type: "personal"
			},
			{
				id: 1,
				name: "Fake Girlme",
				email: "fakegirl@fake.com",
				phone: "333-111-1111",
				type: "professional"
			}
		]
	};
};
