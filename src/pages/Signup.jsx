import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

const Signup = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
    });
    
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value}));
    };

    const isFormValid =() => {
        const { name, email, password, confirmPassword, phoneNumber } = formData;
        return (
            name && 
            email && 
            password && 
            confirmPassword && 
            phoneNumber &&
            password === confirmPassword 
        );
    };

    const handleSendOtp = () => {
        if (!isFormValid()) return;

        setLoading(true);

        setTimeout(() => {
            console.log("OTP sent to WhatsApp:", formData.phoneNumber);
            setStep(2);
            setLoading(false);
        }, 1000);
    };

    const handleVerifyOtp = async () => {
        setLoading(true);

        setTimeout(() => {
            if ( otp === "123456" ) {
                console.log("OTP verified for:", formData.phoneNumber);
                alert("Signup Successfull!");
                navigate("/home");
            } else {
                alert("Invalid OTP!");
            }
            setLoading(false);
        }, 1000);
    };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className='bg-white shadow-lg rounded-xl p-8 max-w-md w-full'
        >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {step === 1 ? "Create Your Account" : "Verify OTP"}
            </h2>

            {step === 1 && (
                <>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input 
                                type="text" 
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                                name='name'
                                placeholder='Your Full Name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input 
                                type="emil" 
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                                name='email'
                                placeholder='you@example.com'
                                value={formData.email}
                                onChange={handleChange}
                            />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input 
                                type="password" 
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                                name='password'
                                placeholder='Your Password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input 
                                type="password" 
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                                name='confirmPassword'
                                placeholder='Confirm Your Password'
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                        </label>
                        <input 
                                type="tel" 
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                                name='phoneNumber'
                                placeholder='+92 1234567890'
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                    </div>
                    <Button
                        onClick={handleSendOtp}
                        className='w-full bg-green-600 hover:bg-green-700 text-white'
                        disabled={!isFormValid() || loading}
                    >
                        {loading ? "Sending OTP..." : "Send OTP"}
                    </Button>

                    <p className="mt-4 text-sm text-center text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-green-600 hover:underline">
                            Log in here
                        </Link>
                    </p>
                </>
            )}

            {step === 2 && (
                <>
                    <label htmlFor="otp" className='block text-sm font-medium text-gray-700 mb-1'>
                        Enter OTP
                    </label>
                    <input 
                        type="text"
                        placeholder='Enter 6-digit code'
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className='w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-4'
                    />
                    <Button
                        onClick={handleVerifyOtp}
                        className='w-full bg-green-600 hover:bg-green-700 text-white'
                        disabled={!otp || loading}
                    >
                        {loading ? "Verifying..." : "Verify OTP"}
                    </Button>
                    <p 
                        className="mt-4 text-sm text-blue-600 cursor-pointer text-center"
                        onClick={() => {
                            setStep(1);
                            setOtp('');
                        }}
                    >
                        Edit Information
                    </p>
                </>
            )}
        </motion.div>
    </div>
  );
};

export default Signup