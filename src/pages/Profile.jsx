import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { useAuth } from '../context/AuthContext';
import { Settings, CreditCard, PlayCircle, LogOut } from 'lucide-react';

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      
      <div className="pt-32 px-4 md:px-12 max-w-[1000px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Account</h1>
        
        <div className="grid md:grid-cols-[1fr_3fr] gap-8 border-t border-gray-700 py-8">
          <div>
            <h2 className="text-gray-500 text-lg uppercase font-medium">Membership & Billing</h2>
            <button className="bg-gray-200 text-black px-4 py-2 mt-4 text-sm font-bold hover:bg-gray-300 transition">
              Cancel Membership
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-bold">{user?.email}</span>
              <a href="#" className="text-blue-500 hover:underline">Change account email</a>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Password: ********</span>
              <a href="#" className="text-blue-500 hover:underline">Change password</a>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Phone: 9876543210</span>
              <a href="#" className="text-blue-500 hover:underline">Change phone number</a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_3fr] gap-8 border-t border-gray-700 py-8">
          <div>
            <h2 className="text-gray-500 text-lg uppercase font-medium">Plan Details</h2>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="font-bold">Premium</span>
              <span className="border border-white px-2 py-0.5 text-[10px] uppercase">Ultra HD</span>
            </div>
            <a href="#" className="text-blue-500 hover:underline">Change plan</a>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_3fr] gap-8 border-t border-gray-700 py-8">
          <div>
            <h2 className="text-gray-500 text-lg uppercase font-medium">Settings</h2>
          </div>
          <div className="space-y-4">
            <a href="#" className="block text-blue-500 hover:underline">Test participation</a>
            <a href="#" className="block text-blue-500 hover:underline">Manage download devices</a>
            <a href="#" className="block text-blue-500 hover:underline">Activate a device</a>
            <a href="#" className="block text-blue-500 hover:underline">Recent device streaming activity</a>
            <a href="#" className="block text-blue-500 hover:underline">Sign out of all devices</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
