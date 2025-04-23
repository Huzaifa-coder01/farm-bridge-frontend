
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Wheat, ShoppingCart, User, UserPlus, LogIn, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedInStatus === 'true');
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate("/");
  }

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    navigate('/login');
  }
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedInStatus === 'true');
  }, [isLoggedIn]);return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Wheat className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Farm Bridge
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/marketplace">
              <Button variant="ghost" className="text-gray-600">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Marketplace
              </Button>
            </Link>
            <Link to="/farmer-signup">
              <Button variant="ghost" className="text-gray-600">
                <UserPlus className="mr-2 h-4 w-4" />
                Join as Farmer
              </Button>
            </Link>
            <Link to="/consumer-signup">
              <Button variant="ghost" className="text-gray-600">
                <UserPlus className="mr-2 h-4 w-4" />
                Join as Consumer
              </Button>
            </Link>
            <Link to="/farmer-dashboard">
              <Button variant="ghost" className="text-gray-600">
                <Wheat className="mr-2 h-4 w-4" />
                Farmer Portal
              </Button>
            </Link>
            <Link to="/consumer-dashboard">
              <Button variant="ghost" className="text-gray-600">
                <User className="mr-2 h-4 w-4" />
                Consumer Portal
              </Button>
            </Link>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </button>
            ) : (
              <button onClick={handleLogin} className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/marketplace"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Marketplace
              </Link>
              <Link
                to="/farmer-signup"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Join as Farmer
              </Link>
              <Link
                to="/consumer-signup"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Join as Consumer
              </Link>
              <Link
                to="/farmer-dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Farmer Portal
              </Link>
              <Link
                to="/consumer-dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Consumer Portal
              </Link>
              {isLoggedIn ? (
              <button onClick={handleLogout} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Logout
              </button>
            ) : (
              <button onClick={handleLogin} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Login
              </button>
            )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
