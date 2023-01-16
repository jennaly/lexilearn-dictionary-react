import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';

import Index from './pages/Index';
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
            element={<Index />}
          />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
