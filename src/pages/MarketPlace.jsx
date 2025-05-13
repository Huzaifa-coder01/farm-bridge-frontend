
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const MarketPlace = () => {
  const navigate = useNavigate();

  const handleWhatsAppChat = (phoneNumber) => {
    const message = encodeURIComponent(
      "Hello, I am interested in the crop you have listed. Can we discuss further?"
    );
    const WhatsAppURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(WhatsAppURL, "_blank");
  };

  const handleBuyNow = (product) => {
    navigate("/cart", {state: { product } });
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-900 mb-4 md:mb-0"
            >
              Available Crops
            </motion.h1>
            <div className="flex space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search crops..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <img 
                    className="w-full h-full object-cover"
                    alt={`Premium wheat crop ${item}`}
                   src="https://images.unsplash.com/photo-1554731217-e6b83553c823" />
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                    Grade A
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Premium Wheat Crop
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Harvested: April 10, 2025
                  </p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">
                      Rs. 1,800/kg
                    </span>
                    <span className="text-sm text-gray-500">
                      Available: 500kg
                    </span>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Button
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => {
                        // Add item to cart logic
                        const product = {
                          id: item,
                          name: "Premium Wheat Crop",
                          price: 1800,
                          quantity: 1,
                          available: 500,
                          image: "https://images.unsplash.com/photo-1554731217-e6b83553c823",
                        };
                        // Save to localStorage or state management
                        let cart = JSON.parse(localStorage.getItem("cart")) || [];
                        const existingProductIndex = cart.findIndex((p) => p.id === product.id);
                        if (existingProductIndex !== -1) {
                          cart[existingProductIndex].quantity += 1;
                        } else {
                          cart = [...cart, product];
                        }
                        localStorage.setItem("cart", JSON.stringify(cart));
                        alert("Item added to cart successfully!");
                        handleBuyNow(product);
                      }}
                    >
                      Buy Now
                    </Button><Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => handleWhatsAppChat("+92 3023444757")}
                    >
                      Chat with Farmer
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
