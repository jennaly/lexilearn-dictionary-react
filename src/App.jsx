import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Index from './pages/Index';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route 
          path="/login"
          element={ <Login />}
          />
      
          <Route 
          path="/signup"
          element={<Signup />}
          />
        
          <Route 
            path="/"
            element={<Index />}
          />
       </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
