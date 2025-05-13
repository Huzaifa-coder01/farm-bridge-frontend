import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("/api/products");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    const addToCart = (products) => {
        if (!cartItems.find((item) => item.id === products.id)) {
            setCartItems((prev) => [...prev, products]);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
    }

    const clearCart = () => setCartItems([]);
  return (
    <div className='min-h-screen bg-gray-100 py-8 px-4'>
        <header className='flex justify-between items-center mb-8'>
            <h1 className='text-3xl font-bold'>MarketPlace</h1>
            <Link to="/" className='text-green-600 hover:underline'>
                Back to Home
            </Link>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {products.length === 0 ? (
                <p className="col-span-full text-gray-500">
                    No Products Available.
                </p>
            ) : (
                products.map((product) => (
                    <div key={product.id} className="bg-white shadow rounded p-4">
                        <h3 className='text-lg font-semibold'>{product.title}</h3>
                        <p className="text-gray-600">
                            {product.price}
                        </p>
                        <Button
                            onClick={() => addToCart(product)}
                            className="mt-2 bg-green-600 hover:bg-green-700 text-white"
                        >
                            Buy Now
                        </Button>
                    </div>
                ))
            )}
        </div>

        <div className='bg-white shadow-md rounded p-6'>
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-500">Cart is empty.</p>
            ) : (
                <>
                    <ul className='space-y-4'>
                        {cartItems.map((item) => (
                            <li
                                key={item.id}
                                className='flex justify-between items-center border p-3 rounded'
                            >
                                <div>
                                    <p className='font-semibold'>{item.title}</p>
                                    <p className='text-gray-600'>{item.price}</p>
                                </div>
                                <Button
                                 variant="outline"
                                 onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </Button>
                            </li>
                        ))}
                    </ul>
                    <Button
                        onClick={clearCart}
                        className="mt-6 bg-red-600 hover:bg-red-700 text-white"
                    >
                        Clear Cart
                    </Button>
                </>
            )}
        </div>
    </div>
  );
};

export default Cart