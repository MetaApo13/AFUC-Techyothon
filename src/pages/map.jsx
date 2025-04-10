import React, { useState } from "react";
import Navbar from '../components/navbar'
import { Home, MapPin, Bell, Shield, User, Calendar, Phone, AlertCircle, Settings, ChevronRight, Menu, X } from "lucide-react";

const CampusSafetyMap = () => {
  const [selectedZone, setSelectedZone] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const zones = [
    {
      id: 1,
      name: "Library Wing",
      status: "safe",
      faculty: "Dr. Eleanor Chen",
      contact: "555-1234",
      details: "Security cameras operational. Well-lit areas. Emergency phones available."
    },
    {
      id: 2,
      name: "Engineering Block",
      status: "safe",
      faculty: "Prof. Robert Miller",
      contact: "555-2341",
      details: "24/7 security personnel. Badge access only. Emergency exit plans posted."
    },
    {
      id: 3,
      name: "East Parking Lot",
      status: "unsafe",
      faculty: "Dr. Sarah Johnson",
      contact: "555-3412",
      details: "Limited lighting. Construction underway. Use buddy system recommended." 
    },
    {
      id: 4,
      name: "Science Labs",
      status: "caution",
      faculty: "Prof. David Garcia",
      contact: "555-4123",
      details: "Chemical storage area. Restricted access zones. Safety protocols in place."
    },
    {
      id: 5,
      name: "Main Cafeteria",
      status: "safe",
      faculty: "Ms. Patricia Wong",
      contact: "555-1255",
      details: "High traffic area. Multiple exits. First aid station available."
    },
    {
      id: 6,
      name: "West Campus",
      status: "unsafe",
      faculty: "Dr. Michael Thompson",
      contact: "555-5123",
      details: "Reduced visibility at night. Limited surveillance. Escort service recommended."
    }
  ];

  const toggleZoneDetails = (zone) => {
    setSelectedZone(zone);
    if (window.innerWidth < 768) {
      setDetailsOpen(true);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 bg-white border-b border-gray-200">
        <h1 className="text-xl font-bold">Campus Safety</h1>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar - Desktop */}
     <Navbar/>

      {/* Zone Details Mobile Overlay */}
      {detailsOpen && selectedZone && (
        <div className="md:hidden fixed inset-0 z-40 bg-white">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-bold">{selectedZone.name} Details</h3>
            <button onClick={() => setDetailsOpen(false)}>
              <X size={24} className="text-gray-500" />
            </button>
          </div>
          <div className="p-4 overflow-y-auto">
            <div className={`p-4 rounded-lg mb-4 ${
              selectedZone.status === 'safe' ? 'bg-green-50' : 
              selectedZone.status === 'caution' ? 'bg-yellow-50' : 'bg-red-50'
            }`}>
              <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${
                selectedZone.status === 'safe' ? 'bg-green-100 text-green-700' : 
                selectedZone.status === 'caution' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
              }`}>
                {selectedZone.status === 'safe' ? 'Safe Zone' : selectedZone.status === 'caution' ? 'Caution Zone' : 'Unsafe Zone'}
              </div>
              <p className="text-sm text-gray-600 mb-4">{selectedZone.details}</p>
              
              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-600 mb-1">Faculty In Charge</div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                    <User className="w-5 h-5 text-teal-500" />
                  </div>
                  <div>
                    <div className="font-medium">{selectedZone.faculty}</div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Phone className="w-3 h-3 mr-1" /> {selectedZone.contact}
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" /> Contact Faculty
              </button>
            </div>
            
            {selectedZone.status !== 'safe' && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-amber-700 mb-1">Safety Recommendations</h4>
                    <ul className="text-sm text-amber-700 space-y-1 pl-5 list-disc">
                      {selectedZone.status === 'unsafe' ? (
                        <>
                          <li>Avoid this area during evening hours</li>
                          <li>Use buddy system when passing through</li>
                          <li>Report any suspicious activity immediately</li>
                          <li>Keep emergency contacts ready</li>
                        </>
                      ) : (
                        <>
                          <li>Follow all posted safety guidelines</li>
                          <li>Be aware of your surroundings</li>
                          <li>Report any concerns to faculty in charge</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {selectedZone.status === 'safe' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-700 mb-1">Safety Features</h4>
                    <ul className="text-sm text-green-700 space-y-1 pl-5 list-disc">
                      <li>24/7 security monitoring</li>
                      <li>Well-lit walkways</li>
                      <li>Emergency call stations</li>
                      <li>Regular security patrols</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - Desktop */}
        <div className="hidden md:block p-6 pb-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Hello Ashley!</h1>
              <p className="text-gray-500 text-sm">10 April 2025, Thursday</p>
            </div>
            <div className="relative">
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Emergency Contact
              </button>
            </div>
          </div>
        </div>

        {/* Map Title */}
        <div className="px-4 md:px-6 py-2 md:pb-4">
          <h2 className="text-lg md:text-xl font-bold text-teal-500">Campus Safety Map</h2>
          <p className="text-gray-500 text-xs md:text-sm">View safety zones and faculty in charge</p>
        </div>

        {/* Map Display */}
        <div className="px-4 md:px-6 flex-1 flex flex-col md:flex-row gap-4 md:gap-6 overflow-y-auto">
          {/* Interactive Map */}
          <div className="flex-1 min-h-60 md:min-h-0 bg-white rounded-xl shadow-sm border border-gray-200 p-2 md:p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gray-50">
              {/* SVG Map */}
              <svg viewBox="0 0 800 600" className="w-full h-full">
                {/* Campus background */}
                <rect x="50" y="50" width="700" height="500" fill="#f0f9ff" stroke="#cbd5e1" strokeWidth="2" />
                
                {/* Buildings and Paths */}
                {/* Library Wing - Safe */}
                <rect 
                  x="100" y="100" 
                  width="150" height="150" 
                  fill="#34d399" 
                  stroke="#059669" 
                  strokeWidth="2" 
                  onClick={() => toggleZoneDetails(zones[0])}
                  className="cursor-pointer"
                  opacity="0.8"
                />
                <text x="175" y="175" textAnchor="middle" fill="#333" fontWeight="bold">Library Wing</text>
                <circle cx="175" y="145" r="10" fill="#059669" />
                <text x="175" y="148" textAnchor="middle" fill="white" fontSize="10">S</text>
                
                {/* Engineering Block - Safe */}
                <rect 
                  x="550" y="100" 
                  width="150" height="200" 
                  fill="#34d399" 
                  stroke="#059669" 
                  strokeWidth="2" 
                  onClick={() => toggleZoneDetails(zones[1])}
                  className="cursor-pointer"
                  opacity="0.8"
                />
                <text x="625" y="200" textAnchor="middle" fill="#333" fontWeight="bold">Engineering</text>
                <circle cx="625" y="170" r="10" fill="#059669" />
                <text x="625" y="173" textAnchor="middle" fill="white" fontSize="10">S</text>
                
                {/* East Parking - Unsafe */}
                <rect 
                  x="550" y="350" 
                  width="150" height="150" 
                  fill="#f87171" 
                  stroke="#b91c1c" 
                  strokeWidth="2" 
                  onClick={() => toggleZoneDetails(zones[2])}
                  className="cursor-pointer"
                  opacity="0.7"
                />
                <text x="625" y="425" textAnchor="middle" fill="#333" fontWeight="bold">East Parking</text>
                <circle cx="625" y="395" r="10" fill="#b91c1c" />
                <text x="625" y="398" textAnchor="middle" fill="white" fontSize="10">U</text>
                
                {/* Science Labs - Caution */}
                <rect 
                  x="350" y="100" 
                  width="150" height="150" 
                  fill="#fbbf24" 
                  stroke="#b45309" 
                  strokeWidth="2" 
                  onClick={() => toggleZoneDetails(zones[3])}
                  className="cursor-pointer"
                  opacity="0.7"
                />
                <text x="425" y="175" textAnchor="middle" fill="#333" fontWeight="bold">Science Labs</text>
                <circle cx="425" y="145" r="10" fill="#b45309" />
                <text x="425" y="148" textAnchor="middle" fill="white" fontSize="10">C</text>
                
                {/* Cafeteria - Safe */}
                <rect 
                  x="300" y="350" 
                  width="200" height="100" 
                  fill="#34d399" 
                  stroke="#059669" 
                  strokeWidth="2" 
                  onClick={() => toggleZoneDetails(zones[4])}
                  className="cursor-pointer"
                  opacity="0.8"
                />
                <text x="400" y="400" textAnchor="middle" fill="#333" fontWeight="bold">Main Cafeteria</text>
                <circle cx="400" y="375" r="10" fill="#059669" />
                <text x="400" y="378" textAnchor="middle" fill="white" fontSize="10">S</text>
                
                {/* West Campus - Unsafe */}
                <rect 
                  x="100" y="300" 
                  width="150" height="200" 
                  fill="#f87171" 
                  stroke="#b91c1c" 
                  strokeWidth="2"
                  onClick={() => toggleZoneDetails(zones[5])}
                  className="cursor-pointer"
                  opacity="0.7"
                />
                <text x="175" y="400" textAnchor="middle" fill="#333" fontWeight="bold">West Campus</text>
                <circle cx="175" y="370" r="10" fill="#b91c1c" />
                <text x="175" y="373" textAnchor="middle" fill="white" fontSize="10">U</text>
                
                {/* Paths */}
                <path d="M250 175 L350 175" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
                <path d="M500 175 L550 175" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
                <path d="M400 250 L400 350" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
                <path d="M175 250 L175 300" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
                <path d="M250 400 L300 400" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
                <path d="M500 400 L550 400" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
              </svg>
              
              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white p-2 md:p-3 rounded-lg shadow border border-gray-200">
                <div className="text-xs md:text-sm font-bold mb-1">Legend</div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-green-400 mr-2"></div>
                  <span className="text-xs">Safe Zone</span>
                </div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-yellow-400 mr-2"></div>
                  <span className="text-xs">Caution Zone</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-red-400 mr-2"></div>
                  <span className="text-xs">Unsafe Zone</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Zone Information for Desktop and Mobile List view */}
          <div className="md:w-80 bg-white rounded-xl shadow-sm border border-gray-200 p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Safety Zones</h3>
              <div className="md:hidden">
                <button className="text-xs bg-teal-500 text-white px-2 py-1 rounded">
                  {selectedZone ? `${selectedZone.name} Selected` : 'Select Zone'}
                </button>
              </div>
            </div>
            <div className="space-y-3 md:space-y-4">
              {zones.map(zone => (
                <div 
                  key={zone.id}
                  className={`p-3 md:p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedZone?.id === zone.id ? 'border-teal-500 shadow-md' : 'border-gray-200'
                  } ${
                    zone.status === 'safe' ? 'bg-green-50' : 
                    zone.status === 'caution' ? 'bg-yellow-50' : 'bg-red-50'
                  }`}
                  onClick={() => toggleZoneDetails(zone)}
                >
                  <div className="flex items-center justify-between mb-1 md:mb-2">
                    <div className="flex items-center">
                      {zone.status === 'safe' && <Shield className="w-4 h-4 text-green-500 mr-2" />}
                      {zone.status === 'caution' && <AlertCircle className="w-4 h-4 text-yellow-500 mr-2" />}
                      {zone.status === 'unsafe' && <AlertCircle className="w-4 h-4 text-red-500 mr-2" />}
                      <span className="font-medium text-sm md:text-base">{zone.name}</span>
                    </div>
                    <div className={`text-xs px-2 py-0.5 md:py-1 rounded-full ${
                      zone.status === 'safe' ? 'bg-green-100 text-green-700' : 
                      zone.status === 'caution' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {zone.status === 'safe' ? 'Safe' : zone.status === 'caution' ? 'Caution' : 'Unsafe'}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">Faculty: {zone.faculty}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Desktop Only */}
      <div className="hidden md:flex w-80 border-l border-gray-200 bg-white flex-col">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-teal-500">Zone Details</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {selectedZone ? (
            <div>
              <div className={`p-4 rounded-lg mb-4 ${
                selectedZone.status === 'safe' ? 'bg-green-50' : 
                selectedZone.status === 'caution' ? 'bg-yellow-50' : 'bg-red-50'
              }`}>
                <h3 className="text-lg font-bold mb-1">{selectedZone.name}</h3>
                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${
                  selectedZone.status === 'safe' ? 'bg-green-100 text-green-700' : 
                  selectedZone.status === 'caution' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                }`}>
                  {selectedZone.status === 'safe' ? 'Safe Zone' : selectedZone.status === 'caution' ? 'Caution Zone' : 'Unsafe Zone'}
                </div>
                <p className="text-sm text-gray-600 mb-4">{selectedZone.details}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-600 mb-1">Faculty In Charge</div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-teal-500" />
                    </div>
                    <div>
                      <div className="font-medium">{selectedZone.faculty}</div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Phone className="w-3 h-3 mr-1" /> {selectedZone.contact}
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" /> Contact Faculty
                </button>
              </div>
              
              {selectedZone.status !== 'safe' && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-700 mb-1">Safety Recommendations</h4>
                      <ul className="text-sm text-amber-700 space-y-1 pl-5 list-disc">
                        {selectedZone.status === 'unsafe' ? (
                          <>
                            <li>Avoid this area during evening hours</li>
                            <li>Use buddy system when passing through</li>
                            <li>Report any suspicious activity immediately</li>
                            <li>Keep emergency contacts ready</li>
                          </>
                        ) : (
                          <>
                            <li>Follow all posted safety guidelines</li>
                            <li>Be aware of your surroundings</li>
                            <li>Report any concerns to faculty in charge</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedZone.status === 'safe' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">Safety Features</h4>
                      <ul className="text-sm text-green-700 space-y-1 pl-5 list-disc">
                        <li>24/7 security monitoring</li>
                        <li>Well-lit walkways</li>
                        <li>Emergency call stations</li>
                        <li>Regular security patrols</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <MapPin className="w-12 h-12 mb-3" />
              <p className="text-center">Select a zone on the map to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CampusSafetyMap;