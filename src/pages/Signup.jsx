import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signup(email, password);
      navigate('/');
    } catch (err) {
      setError('Failed to create an account. ' + err.message);
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="relative h-screen w-screen bg-cover bg-center" style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bca1-0746f3368b4a/4e0538a3-2f8d-4f10-b969-95e54611425e/IN-en-20220502-popsignuptwoweeks-perspective_alpha_website_large.jpg')" }}>
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="absolute top-8 left-8">
        <h1 className="text-netflix-red text-4xl font-black uppercase tracking-tighter cursor-pointer" onClick={() => navigate('/')}>
          NETFLIX_CLONE
        </h1>
      </div>

      <div className="relative flex items-center justify-center h-full pt-20">
        <div className="bg-black/75 p-16 rounded-md w-full max-w-[450px]">
          <h2 className="text-3xl font-bold mb-8">Sign Up</h2>
          
          {error && (
            <div className="bg-[#e87c03] p-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input 
              type="email" 
              placeholder="Email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input 
              type="password" 
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="submit" 
              disabled={loading}
              className="btn-primary py-3 mt-4 text-lg"
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-16 text-gray-500">
            <p>
              Already have an account? <Link to="/login" className="text-white hover:underline">Sign in now.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
