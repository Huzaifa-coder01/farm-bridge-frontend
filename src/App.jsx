
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import FarmerDashboard from "@/pages/FarmerDashboard";
import ConsumerDashboard from "@/pages/ConsumerDashboard";
import MarketPlace from "@/pages/MarketPlace";
import FarmerSignup from "@/pages/FarmerSignup";
import ConsumerSignup from "@/pages/ConsumerSignup";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgetPassword from "./pages/ForgetPassword";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/login" 
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Login />
                  </motion.div>
                } 
              />
              <Route 
                path="/" 
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Home />
                  </motion.div>
                } 
              />
              <Route 
                path="/farmer-signup" 
                element={
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FarmerSignup />
                  </motion.div>
                } 
              />
              <Route 
                path="/consumer-signup" 
                element={
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ConsumerSignup />
                  </motion.div>
                } 
              />
              <Route 
                path="/farmer-dashboard" 
                element={
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FarmerDashboard />
                  </motion.div>
                } 
              />
              <Route 
                path="/consumer-dashboard" 
                element={
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ConsumerDashboard />
                  </motion.div>
                } 
              />
              <Route 
                path="/marketplace" 
                element={
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MarketPlace />
                  </motion.div>
                } 
              />
              <Route 
                path="/signup" 
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Signup />
                  </motion.div>
                } 
              />
              <Route 
                path="/forget-password" 
                element={
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ForgetPassword />
                  </motion.div>
                } 
              />
              <Route 
                path="/cart" 
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Cart />
                  </motion.div>
                } 
              />
            </Routes>
          </AnimatePresence>
        </div>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
