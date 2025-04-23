
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus, Package, Users, Clock } from "lucide-react";
import Navbar from "../components/Navbar";

const FarmerDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
          >
            <h1 className="text-2xl font-bold text-gray-900">Welcome, Farmer</h1>
            <p className="text-gray-600 mt-2">Manage your crops and orders from your dashboard</p>
          </motion.div>
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <div className="flex items-center">
                <Package className="h-8 w-8 text-green-500" />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-900">Active Listings</h2>
                  <p className="text-3xl font-bold text-green-600">5</p>
                </div>
              </div>
            </motion.div>
    
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-500" />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-900">Active Buyers</h2>
                  <p className="text-3xl font-bold text-blue-600">12</p>
                </div>
              </div>
            </motion.div>
    
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-purple-500" />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-900">Pending Orders</h2>
                  <p className="text-3xl font-bold text-purple-600">3</p>
                </div>
              </div>
            </motion.div>
          </div>
    
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Your Crop Listings</h2>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Add New Crop
              </Button>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: item * 0.1 }}
                  className="border rounded-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <img 
                      className="w-full h-full object-cover"
                      alt="Wheat crop"
                      src="https://images.unsplash.com/photo-1554731217-e6b83553c823"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                      Active
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">Premium Wheat</h3>
                    <p className="text-sm text-gray-500">Grade A • 500kg Available</p>
                    <div className="mt-2">
                      <span className="text-2xl font-bold text-green-600">Rs. 1,800/kg</span>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button variant="outline" className="flex-1">Edit</Button>
                      <Button variant="destructive" className="flex-1">Remove</Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
