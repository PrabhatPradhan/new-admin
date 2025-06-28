'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaUser, FaLock } from 'react-icons/fa';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'admin@gmail.com' && password === 'admin123') {
      localStorage.setItem('admin', JSON.stringify({ email }));
      router.push('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">Admin Login</h2>

        {error && (
          <div className="text-red-600 bg-red-100 border border-red-300 px-4 py-2 rounded text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="flex items-center border border-gray-300 px-4 py-2 rounded-full">
            <FaUser className="text-gray-500 mr-3" />
            <input
              type="email"
              placeholder="Admin Email"
              className="w-full outline-none text-gray-700 placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 px-4 py-2 rounded-full">
            <FaLock className="text-gray-500 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-gray-700 placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-full bg-teal-600 text-white font-semibold text-lg hover:bg-teal-700 transition duration-300"
          >
            Log In
          </button>
        </form>

        <p className="text-gray-500 text-sm text-center mt-6">© 2025 Admin Panel</p>
      </div>
    </div>
  );
}
