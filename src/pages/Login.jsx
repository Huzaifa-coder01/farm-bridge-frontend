import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../components/ui/use-toast';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { toast } = useToast();

    const handlelogin = async () => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);

            toast({
                title: 'Success',
                description: 'Login successfull!',
                status: 'success',
                duration: 3000,
            });

            localStorage.setItem('isLoggedIn', 'true');

            navigate('/');
        } catch (error) {
            toast({
                title: 'Error',
                description: error.message,
                status: 'error',
                duration: 3000,
            });
        }
        setLoading(false);
        };

    const handleForgetPassword =() => {
        navigate('/forget-password');
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className='bg-white shadow-lg rounded-xl p-8 w-full max-w-md'
        >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Login to Your Account
            </h2>

            <div className="mb-4">
                <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Email
                </label>
                <input 
                    type="email"
                    id='email'
                    placeholder='Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            <div className="mb-4">
                <label 
                    htmlFor="password" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Password
                </label>
                <input 
                    type="password"
                    id='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            <div className="mb-4">
                <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={handlelogin}
                    disabled={loading}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </Button>
            </div>

            <div className="mt-4 text-sm text-center text-blue-600 cursor-pointer">
                <p onClick={handleForgetPassword}>
                    Forget Password
                </p>
            </div>
        </motion.div>
    </div>
  );
};

export default Login;