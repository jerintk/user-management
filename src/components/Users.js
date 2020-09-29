import React from 'react';
import { useHistory } from 'react-router-dom';

function Users(props) {

	const users = props.users;
	const history = useHistory();

	function deleteUser(userId, event) {
		props.onDeleteUser(userId);
	}

	function editUser(userId, event) {
		props.onDeleteUser(userId);
	}

	function newUser() {
		history.push('/users/new');
	}

	return (
		<div>
			<h2>Users List <button className="btn btn-primary float-right mr-3" onClick={newUser}>New User</button></h2>
			<div className="list">
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Name</th>
							<th scope="col">Age</th>
							<th scope="col">Sex</th>
							<th scope="col">City</th>
							<th scope="col">Country</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={index}>
								<th scope="row">{user.userId}</th>
								<td>{user.name}</td>
								<td>{user.age}</td>
								<td>{user.sex}</td>
								<td>{user.city}</td>
								<td>{user.country}</td>
								<td>
									<button className="btn btn-warning" onClick={(e) => editUser(user.userId, e)}>Edit</button>
									<button className="ml-3 btn btn-danger" onClick={(e) => deleteUser(user.userId, e)}>Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Users;