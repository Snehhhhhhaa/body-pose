import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import Introduction from './pages/Introduction';
import UserProfile from "./pages/UserProfile";
import PostureAnalysis from './pages/PostureAnalysis';
import Recommendations from './pages/Recommendations';
import ExitPage from './pages/ExitPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/introduction" element={<Introduction/>}/>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/analysis" element={<PostureAnalysis />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/exit" element={<ExitPage />} />
      </Routes>
    </Router>
  );
}

export default App;
