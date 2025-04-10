import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';

export default function AdminLoginPanel() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { username, password });
    // Add your authentication logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md px-6 py-8 mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Logo and Header */}
          <div className="px-8 pt-8 pb-6">
            <div className="flex mb-6">
              <div className="flex space-x-1">
                <div className="w-4 h-4 bg-blue-500"></div>
                <div className="w-4 h-4 bg-white"></div>
                <div className="w-4 h-4 bg-white"></div>
                <div className="w-4 h-4 bg-white"></div>
              </div>
              <div className="flex ml-1">
                <div className="w-4 h-4 bg-yellow-500"></div>
                <div className="w-4 h-4 bg-red-500"></div>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-wide">ADMIN PANEL</h1>
            <p className="text-gray-400 text-sm mt-1">Control panel login</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 pb-8">
            <div className="mb-6 relative">
              <div className="absolute left-0 top-3 text-gray-500">
                <User size={18} />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full py-2 pl-6 pr-3 border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            
            <div className="mb-8 relative">
              <div className="absolute left-0 top-3 text-gray-500">
                <Lock size={18} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full py-2 pl-6 pr-3 border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-24 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-2 px-4 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              Login
            </button>
          </form>
          
          {/* Wave decoration */}
          <div className="relative h-24 overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
                <path 
                  fill="#1e40af" 
                  fillOpacity="0.5" 
                  d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,208C840,213,960,203,1080,176C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
                <path 
                  fill="#2563eb" 
                  fillOpacity="0.3" 
                  d="M0,224L60,202.7C120,181,240,139,360,149.3C480,160,600,224,720,224C840,224,960,160,1080,154.7C1200,149,1320,203,1380,229.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}