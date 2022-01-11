import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const useAuth = () => {
  const { user } = useContext(GlobalContext);
  return { isAuthenticated: user.isAuthenticated };
};

export default useAuth;
