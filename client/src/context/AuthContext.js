import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const AuthState = {
  user: {
    isAuthenticated: false,
    token: '',
  },
};

export const AuthContext = createContext(AuthState);

export const AuthProvider = ({ children }) => {
  // CALL GLOBAL REDUCER
  const [state, dispatch] = useReducer(AppReducer, AuthState);

  return (
    <AuthContext.Provider value={{ user: state.user }}>
      {children}
    </AuthContext.Provider>
  );
};
