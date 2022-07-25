import './App.css';
import React,{Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
const About=lazy(()=>import('./About'))
function App() {
  return (
    <>
    <Router>
   <Suspense fallback={<div>Loading...</div>}>
   <Routes>
   {/* <Route path="/" element={<About />} /> */}
   <Route path="/about" element={<About />} /> 
   <Route
      path="/"
      exact
      element={<Home />}
   />
   </Routes>
   </Suspense>
   </Router>
    </>
  );
}

export default App;
