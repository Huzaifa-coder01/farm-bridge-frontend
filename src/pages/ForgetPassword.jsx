import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../lib/firebase';

const ForgetPassword = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1);
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                size : 'invisible',
                callback: (response) => {
                    console.log('reCAPTCHA solved');
                },
                'expired-callback': () => {
                    console.log('reCAPTCHA expired');
                },
            });
        }
    }, []);

    const handleSendOtp = async () => {
        if (!phoneNumber.trim){
            alert('Enter Your Phone Number!');
            return;
        }

        const fullPhoneNumber = phoneNumber.startsWith('+') ? phoneNumber : `+92${phoneNumber}`;

        setLoading(true);

        try {
            if (!phoneNumber.startsWith('+')) {
            setPhoneNumber(`+92${phoneNumber}`);
            }
            const appVerifier = window.recaptchaVerifier;
            const confirmation = await signInWithPhoneNumber(auth, fullPhoneNumber, appVerifier);
            setConfirmationResult(confirmation);
            setStep(2);
            alert('OTP sent to your phone number!');
        } catch (error) {
            console.error('Error sending OTP:', error);
            alert('Failed to send OTP. Make sure phone number is correct and try again.');
            window.recaptchaVerifier.clear();
            window.recaptchaVerifier = null;
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (!otp.trim()) {
            alert('Enter OTP!');
            return;
        }
        
        try {
            await confirmationResult.confirm(otp);
            setStep(3);
            alert('OTP verified successfully! You can now reset your password.');
        } catch (error) {
            console.error('Error verifying OTP:', error);
            alert('Invalid OTP. Please try again.');
        }
    };

    const handleResetPassword = () => {
        if (!newPassword || !confirmPassword) {
            alert('Enter New Password!');
            return;
        }
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        alert('Password reset successfully!');
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
                        onChange={(e) => setNewPassword(e.target.value)}
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
        <div id="recaptcha-container"></div>
    </div>
  );
};

export default ForgetPassword