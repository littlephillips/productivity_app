
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaUser, FaLock } from "react-icons/fa";

// const AuthForm = ({ type }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (loading) return;
//     setLoading(true);
//     setTimeout(() => {
//       localStorage.setItem("user", JSON.stringify({ email }));
//       setLoading(false);
//       navigate("/");
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
//       <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-gray-800 text-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center">{type}</h2>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Email</label>
//           <div className="flex items-center border border-gray-600 rounded p-2">
//             <FaUser className="text-gray-400 mr-2" />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//               className="w-full bg-transparent outline-none"
//               required
//             />
//           </div>
//         </div>
//         <div className="mb-6">
//           <label className="block text-sm font-medium mb-2">Password</label>
//           <div className="flex items-center border border-gray-600 rounded p-2">
//             <FaLock className="text-gray-400 mr-2" />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               className="w-full bg-transparent outline-none"
//               required
//             />
//           </div>
//         </div>
//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full p-3 rounded font-semibold transition ${
//             loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           {loading ? "Logging in..." : type}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AuthForm;
