import { React, useState } from "react";
import { MapPin, X } from "lucide-react";

export default function CampusMap() {
  const [activeLocation, setActiveLocation] = useState(null);
  
  const campusLocations = [
    { 
      id: 1, 
      name: "Main Building", 
      coordinates: { x: 200, y: 180 },
      safetyScore: 95,
      safetyFeatures: ["24/7 Security", "Camera Surveillance", "Emergency Exits"]
    },
    { 
      id: 2, 
      name: "Library", 
      coordinates: { x: 350, y: 150 },
      safetyScore: 98,
      safetyFeatures: ["Secure Entry", "Security Guard", "Fire Alarm System"]
    },
    { 
      id: 3, 
      name: "Student Center", 
      coordinates: { x: 150, y: 300 },
      safetyScore: 90,
      safetyFeatures: ["CCTV", "Emergency Phones", "Well-lit Areas"]
    },
    { 
      id: 4, 
      name: "Science Block", 
      coordinates: { x: 400, y: 280 },
      safetyScore: 92,
      safetyFeatures: ["Lab Safety Protocols", "Security Personnel", "Emergency Response Kit"]
    },
    { 
      id: 5, 
      name: "Sports Complex", 
      coordinates: { x: 300, y: 400 },
      safetyScore: 88,
      safetyFeatures: ["First Aid Station", "Regular Safety Inspections", "Emergency Exits"]
    },
  ];

  const getSafetyScoreColor = (score) => {
    if (score >= 95) return "bg-green-500";
    if (score >= 90) return "bg-green-400";
    if (score >= 85) return "bg-yellow-400";
    if (score >= 80) return "bg-orange-400";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      {/* Header */}
      <div className="bg-white p-6 shadow-md rounded-b-xl">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-xl shadow-md mr-4">
              <MapPin size={24} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Campus Safety Map
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Campus Map */}
          <div className="relative bg-blue-50 p-4 flex-grow md:w-2/3 rounded-xl shadow-lg">
            <div className="relative w-full h-96 md:h-[600px] border-2 border-gray-200 rounded-lg overflow-hidden bg-white">
              {/* Simulated campus map image */}
              <div className="absolute inset-0 bg-blue-50">
                {/* Map paths/roads */}
                <div className="absolute left-1/2 top-0 w-6 h-full bg-gray-300 transform -translate-x-1/2"></div>
                <div className="absolute left-0 top-1/2 w-full h-6 bg-gray-300 transform -translate-y-1/2"></div>
                <div className="absolute left-1/4 top-0 w-6 h-3/4 bg-gray-300 transform -translate-x-1/2"></div>
                <div className="absolute left-3/4 top-1/4 w-6 h-3/4 bg-gray-300 transform -translate-x-1/2"></div>
                
                {/* Map location markers */}
                {campusLocations.map((location) => (
                  <div 
                    key={location.id}
                    className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110"
                    style={{ 
                      left: location.coordinates.x, 
                      top: location.coordinates.y 
                    }}
                    onMouseEnter={() => setActiveLocation(location)}
                    onMouseLeave={() => setActiveLocation(null)}
                  >
                    <div className={`w-12 h-12 rounded-lg ${getSafetyScoreColor(location.safetyScore)} flex items-center justify-center text-white font-bold shadow-lg`}>
                      {location.safetyScore}
                    </div>
                    <div className="text-center mt-1 font-medium text-gray-800 bg-white bg-opacity-75 px-2 py-1 rounded text-sm">
                      {location.name}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Legend */}
              <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 p-3 rounded-lg shadow-md">
                <h3 className="font-bold text-gray-700 mb-2">Safety Score Legend</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                    <span className="text-sm">95-100: Excellent</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-400 rounded mr-2"></div>
                    <span className="text-sm">90-94: Very Good</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-400 rounded mr-2"></div>
                    <span className="text-sm">85-89: Good</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-orange-400 rounded mr-2"></div>
                    <span className="text-sm">80-84: Needs Attention</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                    <span className="text-sm">Below 80: Critical</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Safety Details Sidebar */}
          <div className="w-full md:w-1/3 bg-white p-4 rounded-xl shadow-lg">
            <h3 className="font-bold text-xl mb-4 text-teal-700 border-b pb-2">Safety Information</h3>
            
            {activeLocation ? (
              <div className="animate-fade-in">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4 className="font-bold text-lg">{activeLocation.name}</h4>
                  <div className="flex items-center my-3">
                    <div className={`w-12 h-12 rounded-lg ${getSafetyScoreColor(activeLocation.safetyScore)} flex items-center justify-center text-white font-bold text-xl`}>
                      {activeLocation.safetyScore}
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">Safety Score</div>
                      <div className="text-sm text-gray-500">
                        {activeLocation.safetyScore >= 95 ? "Excellent" : 
                         activeLocation.safetyScore >= 90 ? "Very Good" : 
                         activeLocation.safetyScore >= 85 ? "Good" : 
                         activeLocation.safetyScore >= 80 ? "Needs Attention" : "Critical"}
                      </div>
                    </div>
                  </div>
                  
                  <h5 className="font-medium mb-2">Safety Features:</h5>
                  <ul className="space-y-2">
                    {activeLocation.safetyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h5 className="font-medium mb-2">Emergency Contacts:</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Security Office:</span>
                        <span className="font-medium">555-1234</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Medical Center:</span>
                        <span className="font-medium">555-5678</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fire Emergency:</span>
                        <span className="font-medium">555-9112</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center p-8 text-gray-500">
                <MapPin size={48} className="mx-auto text-gray-400 mb-3" />
                <p>Hover over a location on the map to view its safety details</p>
              </div>
            )}
            
            <div className="mt-6 bg-teal-50 rounded-lg p-4 shadow-md">
              <h4 className="font-bold text-lg mb-3">Campus Safety Tips</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-teal-500 mr-2 flex-shrink-0"></div>
                  <span>Save emergency contacts on speed dial</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-teal-500 mr-2 flex-shrink-0"></div>
                  <span>Use the buddy system when walking at night</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-teal-500 mr-2 flex-shrink-0"></div>
                  <span>Report suspicious activities immediately</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-teal-500 mr-2 flex-shrink-0"></div>
                  <span>Know the locations of emergency exits</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-teal-500 mr-2 flex-shrink-0"></div>
                  <span>Keep valuable belongings secure at all times</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 bg-blue-50 rounded-lg p-4 shadow-md">
              <h4 className="font-bold text-lg mb-3">Report a Safety Concern</h4>
              <form className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Main Building, 2nd Floor"
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Concern Type</label>
                  <select className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-300 focus:outline-none">
                    <option>Lighting Issue</option>
                    <option>Security Concern</option>
                    <option>Facility Damage</option>
                    <option>Suspicious Activity</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea 
                    placeholder="Describe your safety concern..."
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-300 focus:outline-none"
                    rows="3"
                  ></textarea>
                </div>
                <button 
                  type="button"
                  className="w-full py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded hover:shadow-md transition-all duration-200 font-medium"
                >
                  Submit Report
                </button>
                <p className="text-xs text-gray-500 text-center">
                  All reports are anonymous and confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}