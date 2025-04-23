import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

const ForgetPassword = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1);
    const [newPassword, setnewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSendOtp = () => {
        if (!phoneNumber.trim){
            alert('Enter Your Phone Number!');
            return;
        }

        setLoading(true);

        setTimeout(() => {
            alert('OTP sent to WhatsApp:', phoneNumber);
            setStep(2);
            setLoading(false);
        }, 1000);
    };

    const handleVerifyOtp = () => {
        if (otp !== '123456') {
            alert('Invalid OTP!');
            return;
        }
        setStep(3);
    }

    const handleResetPassword = () => {
        if (!newPassword || !confirmPassword) {
            alert('Enter New Password!');
            return;
        }
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        alert('Password has been reset successfully!');
        navigate('/login');
    };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className='bg-white shadow-lg rounded-xl p-8 w-full max-w-md'
        >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {step === 1
                    ? "Forgot Password"
                    : step === 2 
                    ? "Enter OTP" 
                    : "Reset Password"}
            </h2>

            {step === 1 && (
                <>
                    <label 
                        htmlFor="phoneNumber" 
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        placeholder='Enter Your Phone Number'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className='mb-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'    
                    />
                    <Button
                        onClick={handleSendOtp}
                        className='w-full bg-green-600 hover:bg-green-700  text-white'
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send OTP"}
                    </Button>
                </>
            )}

            {step === 2 && (
                <>
                    <label 
                        htmlFor="otp" 
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Enter OTP
                    </label>
                    <input
                        type="text"
                        placeholder='Enter 6-digit OTP'
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className='mb-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'    
                    />
                    <Button
                        onClick={handleVerifyOtp}
                        className='w-full bg-green-600 hover:bg-green-700  text-white'
                    >
                        Verify OTP
                    </Button>
                </>
            )}

            {step === 3 && (
                <>
                    <label 
                        htmlFor="newPassword" 
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        New Password
                    </label>
                    <input
                        type="password"
                        placeholder='Enter new password'
                        value={newPassword}
                        onChange={(e) => setnewPassword(e.target.value)}
                        className='mb-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'    
                    />

                    <label 
                        htmlFor="confirmPassword" 
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        placeholder='Confirm new password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='mb-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'    
                    />
                    <Button
                        onClick={handleResetPassword}
                        className='w-full bg-green-600 hover:bg-green-700  text-white'
                    >
                        Reset Password
                    </Button>
                </>
            )}
        </motion.div>
    </div>
  );
};

export default ForgetPassword