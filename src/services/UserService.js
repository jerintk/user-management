import users from '../data/users.json';

const UserService = {
  getUsers: function() {
    return new Promise((resolve) => {
      resolve(users);
    });
  }
}

export default UserService;