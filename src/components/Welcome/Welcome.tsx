/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import useUserInfo from '@/hooks/useUserInfo';
import { redirect, Outlet } from 'react-router-dom';
import { getContacts, createContact } from '@/contacts';
async function loader() {
	const contacts = await getContacts();
	return { contacts };
}
async function action() {
	const contact = await createContact();
	console.log(contact, 'contact');
	return redirect(`/contacts/${contact.id}/edit`);
}
const Welcome = () => {
	const { userInfo } = useUserInfo();
	return (
		<>
			<h1>It's Hot - Soup</h1>
			<div>Welcome, {userInfo.name}</div>
			<Outlet />
		</>
	);
};

Welcome.propTypes = {};

export { Welcome as default, loader, action };
