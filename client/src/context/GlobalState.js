import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  user: {
    isAuthenticated: false,
    token: '',
  },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  // CALL GLOBAL REDUCER
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ initialState }}>
      {children}
    </GlobalContext.Provider>
  );
};
