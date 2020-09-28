import users from '../data/users.json';

const UserService = {
  getUsers: function() {
    return users;
  }
}

export default UserService;