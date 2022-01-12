import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  const { user } = useContext(AuthContext);
  return { isAuthenticated: user.isAuthenticated };
};

export default useAuth;
