import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';

function Users() {

	const [users, setUsers] = useState([]);

	async function getUsersData() {
		const users = await UserService.getUsers();
		if (users && users.length > 0) {
			setUsers(users);
		}
	}
	
	useEffect(() => {
		getUsersData();
	}, []);

	return (
		<div>
			<h2>Users List</h2>
			<div className="list">
				{users.map((user, index) => (
					<div key={index}>{user.name} - {user.age}</div>
				))}
			</div>
		</div>
	);
}

export default Users;