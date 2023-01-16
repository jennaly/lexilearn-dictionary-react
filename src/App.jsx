import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';

import Index from './pages/Index';
import Login from './pages/Login';
import Signup from './pages/Signup';

import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  return (
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
          element={<Layout><Index /></Layout>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
