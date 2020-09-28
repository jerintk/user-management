import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';

function Users() {

	const [users, setUsers] = useState([]);

	useEffect(() => {
		const usersList = UserService.getUsers();
		if (usersList && usersList.length > 0) {
			setUsers(usersList);
		}
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