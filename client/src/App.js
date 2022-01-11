import { Suspense, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
import './App.css';
import './styles/globals.scss';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider className="App">
      <Router>
        <Navbar />
        <Routes>
          {routes.map((route, i) => {
            const Guard = route.guard || Fragment;

            return (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                element={
                  <Suspense fallback={<>...</>}>
                    <Guard>
                      <route.element />
                    </Guard>
                  </Suspense>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
