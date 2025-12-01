import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
// // import AuthForm from "./components/AuthForm";
// import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  // const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        {/* <Header /> */}
        <main className="flex-grow">
          {/* <Routes>
            <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/login" element={<AuthForm type="Login" />} />
            <Route path="/signup" element={<AuthForm type="Signup" />} />
          </Routes> */}

             <Routes>
            <Route path="/" element={ <Dashboard />} />
          </Routes> 
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
