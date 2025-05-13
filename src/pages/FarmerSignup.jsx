
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Upload } from "lucide-react";
import Navbar from "../components/Navbar";
import { auth, setUpRecaptcha } from "../lib/firebase";
import { signInWithPhoneNumber } from "firebase/auth";

const FarmerSignup = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    address: "",
    cnic: "",
    landRegistry: null,
  });
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmationCode, setConfirmationCode] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, landRegistry: file }));
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!formData.whatsapp) {
      toast({
        title: "WhatsApp Number Required",
        description: "Please enter your WhatsApp number",
        variant: "destructive",
      });
      return;
    }

    try {
      const recaptcha = new setUpRecaptcha(
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {},
        },
        auth
      );
      const formattedPhone = formData.whatsapp.startsWith("+")
        ? formData.whatsapp
        : `+92${formData.whatsapp.replace(/^0/, "")}`;

        const result = await signInWithPhoneNumber(auth, formattedPhone, recaptcha);
        setConfirmationCode(result);
        setOtpSent(true);

        toast({
          title: "OTP Sent",
          description: "Please check your WhatsApp for the OTP",
        });
    } catch (error) {
      toast({
        title: "Error Sending OTP",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otpSent || !otp || !confirmationCode) {
      toast({
        title: "Verification Required",
        description: "Please verify your WhatsApp number first",
        variant: "destructive",
      });
      return;
    }

    try {
      await confirmationCode.confirm(otp);
      toast({
        title: "OTP Verified",
        description: "You can now complete your registration",
      });
    } catch (error) {
      toast({
        title: "Error Verifying OTP",
        description: error.message,
        variant: "destructive",
      });
    }
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
              Farmer Registration
            </h1>

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
                  Complete Address
                </label>
                <textarea
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CNIC Number
                </label>
                <input
                  type="text"
                  name="cnic"
                  required
                  value={formData.cnic}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Land Registry Document
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer rounded-md bg-white font-medium text-green-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 hover:text-green-500">
                        <span>Upload a file</span>
                        <input
                          type="file"
                          className="sr-only"
                          onChange={handleFileChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PDF, PNG, JPG up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Complete Registration
              </Button>
            </form>
            <div id="recaptcha-container"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FarmerSignup;
