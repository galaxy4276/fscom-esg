import { UserService } from './api';

const userUtils = {
  save: user => {
    const managed = {
      ...user,
      isLoggedIn: true
    };
    localStorage.setItem("user", managed);
  },
  update: user => {
    const storage = localStorage.getItem("user")
    if (!storage) {
      userUtils.save(user)
      return;
    }

    // TODO: user update (PUT) API
  },
  login: async (email, password) => {
    try {
      const user = await UserService.login(email, password)
      userUtils.save(user);
    } catch (error) {
      throw Error(error);
    }
  },
  logout: () => {
    localStorage.removeItem('user');
  }
}

export default userUtils;
