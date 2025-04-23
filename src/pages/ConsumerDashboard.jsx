
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag, MessageSquare, Clock, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";

const ConsumerDashboard = () => {
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
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, Consumer</h1>
            <p className="text-gray-600 mt-2">Track your orders and connect with farmers</p>
          </motion.div>
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <div className="flex items-center">
                <ShoppingBag className="h-8 w-8 text-green-500" />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-900">Total Orders</h2>
                  <p className="text-3xl font-bold text-green-600">8</p>
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
                <MessageSquare className="h-8 w-8 text-blue-500" />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-900">Active Chats</h2>
                  <p className="text-3xl font-bold text-blue-600">3</p>
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
                  <h2 className="text-lg font-semibold text-gray-900">Pending Deliveries</h2>
                  <p className="text-3xl font-bold text-purple-600">2</p>
                </div>
              </div>
            </motion.div>
          </div>
    
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Orders</h2>
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="border-b last:border-0 py-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        className="h-16 w-16 object-cover rounded"
                        alt="Wheat crop"
                        src="https://images.unsplash.com/photo-1554731217-e6b83553c823"
                      />
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900">Premium Wheat</h3>
                        <p className="text-sm text-gray-500">100kg • Rs. 180,000</p>
                        <p className="text-sm text-green-600">Delivery Expected: Apr 15</p>
                      </div>
                    </div>
                    <Button variant="ghost">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Active Conversations</h2>
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="border-b last:border-0 py-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                        <MessageSquare className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900">Farmer Ahmad</h3>
                        <p className="text-sm text-gray-500">Last message: Price negotiation...</p>
                      </div>
                    </div>
                    <Button>Continue Chat</Button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerDashboard;
