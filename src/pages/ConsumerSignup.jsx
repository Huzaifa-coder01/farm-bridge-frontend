
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Copy } from "lucide-react";
import Navbar from "../components/Navbar";

const ConsumerSignup = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    address: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [showBankDetails, setShowBankDetails] = useState(false);

  const bankDetails = {
    accountTitle: "Farm Bridge",
    accountNumber: "1234-5678-9012-3456",
    bankName: "HBL Bank",
    branchCode: "0123",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setOtpSent(true);
    toast({
      title: "OTP Sent",
      description: "Please check your WhatsApp for the verification code",
    });
  };

  const handleCopyBankDetails = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Bank details copied to clipboard",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otpSent) {
      toast({
        title: "Verification Required",
        description: "Please verify your WhatsApp number first",
        variant: "destructive",
      });
      return;
    }

    setShowBankDetails(true);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Consumer Registration
            </h1>
    
            <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
              <p className="text-green-700">
                ✨ Special Offer: Pay Rs. 500 and get a free wheat sample delivered to your doorstep!
              </p>
            </div>
    
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
    
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  WhatsApp Number
                </label>
                <div className="mt-1 flex gap-2">
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                  <Button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={otpSent}
                    className="whitespace-nowrap"
                  >
                    Send OTP
                  </Button>
                </div>
              </div>
    
              {otpSent && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                    maxLength={6}
                  />
                </div>
              )}
  
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Complete Address (Faisalabad)
                </label>
                <textarea
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Please enter your complete delivery address in Faisalabad"
                />
              </div>
            
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium text-gray-900">Payment Summary</h3>
                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-gray-500">Registration Fee</span>
                  <span className="text-gray-900">Rs. 500</span>
                </div>
                <div className="mt-1 flex justify-between text-sm">
                  <span className="text-gray-500">Free Wheat Sample</span>
                  <span className="text-green-600">Included</span>
                </div>
              </div>
            
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Proceed to Payment
              </Button>
            </form>
            
            {showBankDetails && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-blue-50 p-4 rounded-md"
              >
                <h3 className="font-medium text-blue-900 mb-4">Bank Payment Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700">Account Title</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{bankDetails.accountTitle}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopyBankDetails(bankDetails.accountTitle)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700">Account Number</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{bankDetails.accountNumber}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopyBankDetails(bankDetails.accountNumber)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700">Bank Name</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{bankDetails.bankName}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopyBankDetails(bankDetails.bankName)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700">Branch Code</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{bankDetails.branchCode}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopyBankDetails(bankDetails.branchCode)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-blue-700">
                  Please make the payment and send the screenshot to our WhatsApp number for verification.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerSignup;
