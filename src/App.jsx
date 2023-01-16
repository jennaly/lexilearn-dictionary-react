import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';

import MainApp from './pages/MainApp';
import Login from './pages/Login';
import Signup from './pages/Signup';

import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          {!user && 
            <Route 
            path="/login"
            element={ <Login />}
            />
          }  

          {!user && 
            <Route 
            path="/signup"
            element={<Signup />}
          />
          }  

          <Route 
            path="/"
            element={<MainApp />}
          />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
