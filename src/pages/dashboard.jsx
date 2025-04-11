import React from "react";
import Navbar from '../components/navbar';
import { Home, MapPin, Bell, Calendar, User, AlertCircle, Phone, Search, Settings, ChevronRight } from "lucide-react";

const Dashboard = () => {
  const alerts = [
    {
      id: 1,
      title: "Keep Emergency Contacts Saved in Your Phone",
      reporter: "Nikhilesh",
      status: "New",
      type: "Bullying",
      location: "Cafeteria",
      time: "3:55 PM",
      priority: "Medium",
      assignedTo: "Rina Dias",
      icon: <Bell className="text-blue-500" />
    },
    {
      id: 2,
      title: "Keep Emergency Contacts Saved in Your Phone",
      reporter: "Nikhilesh",
      status: "New",
      type: "Bullying",
      location: "Cafeteria",
      time: "3:55 PM",
      priority: "Medium",
      assignedTo: "Rina Dias",
      icon: <Bell className="text-blue-500" />
    },
    {
      id: 3,
      title: "Keep Emergency Contacts Saved in Your Phone",
      reporter: "Nikhilesh",
      status: "New",
      type: "Bullying",
      location: "Cafeteria",
      time: "3:55 PM",
      priority: "Medium",
      assignedTo: "Rina Dias",
      icon: <Bell className="text-blue-500" />
    },
    {
      id: 4,
      title: "Keep Emergency Contacts Saved in Your Phone",
      reporter: "Nikhilesh",
      status: "New",
      type: "Bullying",
      location: "Cafeteria",
      time: "3:55 PM",
      priority: "Medium",
      assignedTo: "Rina Dias",
      icon: <Bell className="text-blue-500" />
    }
  ];

  const notices = [
    {
      id: 1,
      title: "Severe Weather Alert – Stay Indoors Until Further Notice",
      author: "Nikhilesh",
      date: "24 January 2025",
      priority: "high",
      icon: <AlertCircle size={16} />,
      color: "bg-red-500",
      textColor: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      id: 2,
      title: "Keep Emergency Contacts Saved in Your Phone",
      author: "Nikhilesh",
      date: "24 January 2025",
      priority: "medium",
      icon: <Phone size={16} />,
      color: "bg-orange-500",
      textColor: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      id: 3,
      title: "Lost & Found: A blue backpack was found near the cafeteria",
      author: "Nikhilesh",
      date: "24 January 2025",
      priority: "low",
      icon: <AlertCircle size={16} />,
      color: "bg-green-500",
      textColor: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <div className="flex h-screen w-100px bg-gray-50">
      {/* Sidebar */}
      <Navbar/>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="p-6 pb-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Hello Ashley!</h1>
              <p className="text-gray-500 text-sm">10 April 2025, Thursday</p>
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Dashboard Widgets */}
        <div className="px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-teal-400 to-teal-500 text-white p-6 rounded-xl shadow-sm h-40 relative overflow-hidden">
              <h2 className="text-xl font-bold">Status of IoT Devices</h2>
              <p className="text-teal-100 mt-1">All systems operational</p>
              <div className="mt-4 flex space-x-2">
                <span className="px-3 py-1 bg-teal-300 bg-opacity-30 rounded-full text-sm">Online: 42</span>
                <span className="px-3 py-1 bg-teal-300 bg-opacity-30 rounded-full text-sm">Offline: 3</span>
              </div>
              <img 
                src="/api/placeholder/150/150" 
                alt="IoT illustration" 
                className="absolute right-4 bottom-4 h-24 w-24 object-contain"
              />
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-6 rounded-xl shadow-sm h-40 flex flex-col justify-between">
              <h2 className="text-xl font-bold">Recent Alerts</h2>
              <div className="flex items-end justify-between">
                <div className="text-8xl font-bold leading-none">25</div>
                <button className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm hover:bg-opacity-30 transition-colors">
                  View all <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Incident List */}
        <div className="px-6 pt-6 pb-4 flex-1 overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Incidents</h2>
            <div className="flex space-x-2">
              <button className="text-sm text-teal-500 hover:text-teal-600">Filter</button>
              <button className="text-sm text-teal-500 hover:text-teal-600">Sort</button>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 h-full overflow-y-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 text-gray-600 text-xs">
                  <th className="py-3 px-4 text-left font-medium">INCIDENT</th>
                  <th className="py-3 px-4 text-left font-medium">LOCATION</th>
                  <th className="py-3 px-4 text-left font-medium">TYPE</th>
                  <th className="py-3 px-4 text-left font-medium">TIME</th>
                  <th className="py-3 px-4 text-left font-medium">PRIORITY</th>
                  <th className="py-3 px-4 text-left font-medium">ASSIGNED TO</th>
                </tr>
              </thead>
              <tbody>
                {alerts.map((alert, index) => (
                  <tr key={alert.id} className="border-t border-gray-100 hover:bg-gray-50 cursor-pointer">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                          <Bell className="w-4 h-4 text-blue-500" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{alert.title}</div>
                          <div className="text-xs text-gray-500">
                            Reported by: {alert.reporter} • Status: {alert.status}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{alert.location}</td>
                    <td className="py-3 px-4 text-sm">{alert.type}</td>
                    <td className="py-3 px-4 text-sm">{alert.time}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                        <span className="text-sm">{alert.priority}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{alert.assignedTo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Notice Board */}
      <div className="w-80 border-l border-gray-200 bg-white flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-teal-500">Notice Board</h2>
          <button className="mt-3 w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
            Add & Edit Notice
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {notices.map(notice => (
              <div key={notice.id} className={`${notice.bgColor} border border-gray-200 rounded-lg p-4 shadow-sm`}>
                <div className="flex items-start">
                  <div className={`${notice.color} p-1 rounded-full mr-3 flex-shrink-0`}>
                    {notice.icon}
                  </div>
                  <div>
                    <h3 className={`${notice.textColor} font-medium text-sm mb-2`}>
                      {notice.title}
                      {notice.priority === "high" && <span className="ml-1">🚨</span>}
                    </h3>
                    <div className="flex text-xs text-gray-500 items-center space-x-4">
                      <div className="flex items-center">
                        <User size={12} className="mr-1" />
                        <span>{notice.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        <span>{notice.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;