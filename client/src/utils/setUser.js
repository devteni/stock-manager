export const setUser = ({ user, data }) => {
  const { token } = data;
  user.isAuthenticated = true;
  user.token = token;
  localStorage.setItem('token', token);
};
