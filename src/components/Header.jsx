// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <header className="bg-gray-800 text-white p-4 shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold tracking-wide">Phillips Daily Grind</Link>
//         <nav className="flex items-center space-x-6">
//           {user ? (
//             <>
//               <span className="hidden sm:block text-sm text-gray-300">Welcome, {user.email}</span>
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-medium transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="hover:underline">Login</Link>
//               <Link to="/signup" className="hover:underline">Signup</Link>
//             </>
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;