import { useState } from 'react';
import { Video, Play, AlertCircle, MapPin, Bell, Settings, Clock, Check, XCircle, ChevronDown, List, Home } from 'lucide-react';
import Navbar from '../components/navbar'

export default function SmartIncidentManagement() {
  const [selectedLocation, setSelectedLocation] = useState('Cafeteria');
  
  const locations = [
    'Cafeteria', 
    'Main Entrance', 
    'Gymnasium', 
    'Library', 
    'Computer Lab',
    'Science Lab',
    'Parking Lot',
    'Playground'
  ];
  
  const iotDevices = [
    { id: 1, name: 'Security Camera #1', location: 'Main Entrance', status: 'Active', lastUpdate: '10 min ago', type: 'Camera' },
    { id: 2, name: 'Motion Sensor #3', location: 'Cafeteria', status: 'Active', lastUpdate: '2 min ago', type: 'Motion' },
    { id: 3, name: 'Smoke Detector #2', location: 'Science Lab', status: 'Active', lastUpdate: '5 min ago', type: 'Smoke' },
    { id: 4, name: 'Security Camera #2', location: 'Parking Lot', status: 'Inactive', lastUpdate: '1 hr ago', type: 'Camera' },
    { id: 5, name: 'Access Control #1', location: 'Main Entrance', status: 'Active', lastUpdate: '1 min ago', type: 'Access' },
    { id: 6, name: 'Temperature Sensor #4', location: 'Computer Lab', status: 'Warning', lastUpdate: '15 min ago', type: 'Temperature' },
    { id: 7, name: 'Security Camera #3', location: 'Gymnasium', status: 'Active', lastUpdate: '7 min ago', type: 'Camera' },
    { id: 8, name: 'Motion Sensor #5', location: 'Library', status: 'Inactive', lastUpdate: '3 hrs ago', type: 'Motion' },
  ];
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const selectLocation = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };
  
  const getStatusColor = (status) => {
    switch(status) {
      case 'Active':
        return 'bg-green-500';
      case 'Inactive':
        return 'bg-red-500';
      case 'Warning':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  const getDeviceIcon = (type) => {
    switch(type) {
      case 'Camera':
        return <Video className="text-teal-600" size={18} />;
      case 'Motion':
        return <AlertCircle className="text-purple-600" size={18} />;
      case 'Smoke':
        return <AlertCircle className="text-red-600" size={18} />;
      case 'Access':
        return <Home className="text-green-600" size={18} />;
      case 'Temperature':
        return <AlertCircle className="text-orange-600" size={18} />;
      default:
        return <AlertCircle className="text-gray-600" size={18} />;
    }
  };
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
 <Navbar/>
      
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Video Summary Section (Left side) */}
        <div className="w-1/2 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-6">Smart Incident Management</h1>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Location Monitoring</h2>
            
            {/* Dropdown for locations */}
            <div className="relative mb-4">
              <button 
                onClick={toggleDropdown}
                className="w-full flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
              >
                <span>{selectedLocation}</span>
                <ChevronDown size={20} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  {locations.map((location) => (
                    <div 
                      key={location} 
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => selectLocation(location)}
                    >
                      {location}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Video display */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative">
              <div className="aspect-w-16 aspect-h-9 bg-black flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="bg-blue-600 rounded-full p-4 inline-block mb-2">
                      <Play size={32} />
                    </div>
                    <p className="text-sm">Camera Feed: {selectedLocation}</p>
                  </div>
                </div>
                <img 
                  src="/api/placeholder/640/360" 
                  alt="Video placeholder" 
                  className="opacity-50 w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-900 text-white p-3 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="animate-pulse h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm">Live</span>
                </div>
                <span className="text-sm">April 10, 2025 - 3:55 PM</span>
              </div>
            </div>
          </div>
          
          {/* Video Summary */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Incident Summary</h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-medium text-gray-800 mb-2">{selectedLocation} - Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Clock size={16} className="text-gray-500" />
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">3:55 PM:</span> Motion detected near east entrance
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Clock size={16} className="text-gray-500" />
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">3:47 PM:</span> Unidentified person approached sensor zone
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Clock size={16} className="text-gray-500" />
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">3:32 PM:</span> Temperature increase detected
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Clock size={16} className="text-gray-500" />
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">3:15 PM:</span> Normal activity recorded
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <button className="text-blue-600 text-sm font-medium hover:underline">
                  View complete incident log
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* IoT Devices List (Right side) */}
        <div className="w-1/2 bg-gray-50 p-6 border-l border-gray-200 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">IoT Devices Status</h2>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {iotDevices.filter(device => device.status === 'Active').length} Active
            </span>
          </div>
          
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Search devices..." 
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div className="space-y-3">
            {iotDevices.map((device) => (
              <div 
                key={device.id} 
                className="bg-white rounded-lg shadow-sm p-4 border-l-4 hover:shadow-md transition-shadow"
                style={{ borderLeftColor: device.status === 'Active' ? '#10B981' : 
                                        device.status === 'Inactive' ? '#EF4444' : 
                                        '#F59E0B' }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="mr-3">
                      {getDeviceIcon(device.type)}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{device.name}</h3>
                      <p className="text-sm text-gray-500">{device.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className={`h-2 w-2 rounded-full mr-2 ${getStatusColor(device.status)}`}></div>
                    <span className="text-xs font-medium">{device.status}</span>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-gray-100 flex justify-between text-xs text-gray-500">
                  <span>Last updated: {device.lastUpdate}</span>
                  <button className="text-blue-600 hover:underline">Details</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-sm font-medium text-blue-800 mb-2">System Status</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Network Connection</span>
                  <div className="flex items-center text-green-600">
                    <Check size={16} className="mr-1" />
                    <span>Stable</span>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Storage Capacity</span>
                  <span>72% Available</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>System Updates</span>
                  <div className="flex items-center text-orange-500">
                    <AlertCircle size={16} className="mr-1" />
                    <span>Updates Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}