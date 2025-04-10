import { Link } from "react-router-dom";
import { Home, MapPin, Bell, Settings, X } from "lucide-react"
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-20 bg-teal-400 flex-col items-center pt-8 pb-4">
        <div className="flex flex-col items-center space-y-8">
          <Link to="/dashboard" className="p-2 hover:bg-teal-300 rounded-xl transition-colors cursor-pointer">
            <Home className="w-6 h-6 text-white" />
          </Link>
          <Link to="/map" className="p-2 bg-teal-300 rounded-xl">
            <MapPin className="w-6 h-6 text-white" />
          </Link>
          <Link to="/iot" className="p-2 hover:bg-teal-300 rounded-xl transition-colors cursor-pointer">
            <Bell className="w-6 h-6 text-white" />
          </Link>
          
        </div>
        <div className="mt-auto">
        <Link to="/" className="p-2 hover:bg-teal-300 rounded-xl transition-colors cursor-pointer">
            Logout
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-64 h-full bg-white" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="font-bold">Menu</h3>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} className="text-gray-500" />
              </button>
            </div>
            <div className="p-4">
              <div className="flex flex-col space-y-4">
                <Link to="/dashboard" className="flex items-center text-gray-700 hover:text-teal-500">
                  <Home className="w-5 h-5 mr-3" />
                  <span>Home</span>
                </Link>
                <Link to="/map" className="flex items-center text-teal-500 font-medium">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Safety Map</span>
                </Link>
                <Link to="/alerts" className="flex items-center text-gray-700 hover:text-teal-500">
                  <Bell className="w-5 h-5 mr-3" />
                  <span>Alerts</span>
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
              <div className="flex items-center">
              <Link to="/" className="p-2 hover:bg-teal-300 rounded-xl transition-colors cursor-pointer">
            Logout
          </Link>
                <div>
                  <div className="font-medium">Ashley</div>
                  <div className="text-sm text-gray-500">Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
