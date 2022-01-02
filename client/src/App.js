import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
import './App.css';
import './styles/globals.scss';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {routes.map((route, i) => {
            return (
              <Route
                key={i}
                path={route.path}
                element={
                  <Suspense fallback={<>...</>}>
                    <route.element />
                  </Suspense>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
