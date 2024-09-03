import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../utils/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:5800/api/user/logout", {
        method: "POST",
        credentials: 'include',
      });

      if (!res.ok) {
        const data = await res.json();
        return toast.error(data.message || "Failed to log out.");
      }

      // On successful logout, update the state and navigate to the homepage
      setIsLoggedIn(false);
      toast.success("Successfully logged out.");
      navigate("/login");
      
    } catch (error) {
      toast.error("An error occurred during logout.");
    }
  };

  return (
    <nav className="bg-purple-blue p-4 flex justify-between items-center">
      <div className="text-white font-bold text-xl">
        <Link to="/">DTC</Link>
      </div>
      <div>
        {isLoggedIn ? (
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-green-500 text-white py-2 px-4 rounded">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
