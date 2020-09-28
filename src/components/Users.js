import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';

function Users() {

	const [users, setUsers] = useState([]);
	
	useEffect(() => {
		const usersList = UserService.getUsers();
		setUsers(usersList);
	}, []);

	return (
		<div>
			<h2>Users List</h2>
			{users.map((user, index) => (
				<div key={index}>{user.name}</div>
			))}
		</div>
	);
}

export default Users;