import users from '../data/users.json';

const UserService = {
  getJsonFile: () => {
    return new Promise((resolve) => {
      resolve(users);
    })
  },

  getUsers: async function() {
    const users = await this.getJsonFile();
    return users;
  }
}

export default UserService;