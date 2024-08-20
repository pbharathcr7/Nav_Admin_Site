import './App.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Drivers from './Drivers';
import AddRoutes from './AddRoutes';
import AddBus from './AddBus';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import Login from './login'; // Add a login component
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex"> 
          <Navbar /> 
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}/> 
            <Route path="/drivers" element={<PrivateRoute><Drivers/></PrivateRoute>}/>
            <Route path="/buses" element={<PrivateRoute><AddBus/></PrivateRoute>}/>
            <Route path="/add-routes" element={<PrivateRoute><AddRoutes/></PrivateRoute>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
