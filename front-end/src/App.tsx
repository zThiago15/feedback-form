import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={ <Navigate to="/contact" /> } />
    </Routes>
  );
}

export default App;
