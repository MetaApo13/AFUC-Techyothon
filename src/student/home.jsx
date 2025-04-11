import { React, useState, useEffect } from "react";
import { MessageCircle, Bell, AlertCircle, MapPin, User, Send, Plus, Calendar, X, ArrowRight, Map } from "lucide-react";

export default function StudentDashboard() {
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hi there! I'm your campus assistant. How can I help you today?", isUser: false },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [showChatbot, setShowChatbot] = useState(false);
  const [issueType, setIssueType] = useState("General");
  const [animateCards, setAnimateCards] = useState(false);
  const [animateNotices, setAnimateNotices] = useState(false);
  const [anonymousMessage, setAnonymousMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [issueDescription, setIssueDescription] = useState("");
  const [issueLocation, setIssueLocation] = useState("");
  const [reportIssueType, setReportIssueType] = useState("Facilities");
  const [issueSent, setIssueSent] = useState(false);

  // Animation timing for initial page load
  useEffect(() => {
    setAnimateCards(true);
    setTimeout(() => setAnimateNotices(true), 300);
  }, []);

  const notices = [
    { 
      id: 1, 
      title: "Severe Weather Alert – Stay Indoors Until Further Notice", 
      priority: "high", 
      date: "24 January 2025",
      author: "Nikhilesh",
      content: "Due to severe weather conditions, all students are advised to stay indoors until further notice."
    },
    { 
      id: 2, 
      title: "Keep Emergency Contacts Saved in Your Phone", 
      priority: "medium", 
      date: "24 January 2025",
      author: "Nikhilesh",
      content: "All students should keep emergency contact numbers saved in their phones for quick access."
    },
    { 
      id: 3, 
      title: "Lost & Found: A blue backpack was found near the cafeteria", 
      priority: "low", 
      date: "24 January 2025",
      author: "Nikhilesh",
      content: "A blue backpack was found near the cafeteria. If it belongs to you, please contact the admin office."
    },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    setChatMessages([...chatMessages, { id: chatMessages.length + 1, text: newMessage, isUser: true }]);
    setNewMessage("");

    setTimeout(() => {
      let botResponse = "I've received your message. How can I help you further?";
      
      if (newMessage.toLowerCase().includes("report")) {
        botResponse = "I can help you report an issue anonymously. Please select an issue type and describe what happened.";
      } else if (newMessage.toLowerCase().includes("notice")) {
        botResponse = "You can view all notices on the notice board section of the dashboard.";
      } else if (newMessage.toLowerCase().includes("help")) {
        botResponse = "I'm here to help! You can report issues, ask questions about campus services, or get information about recent notices.";
      } else if (newMessage.toLowerCase().includes("anonymous")) {
        botResponse = "Don't worry! All reports made through this chatbot are completely anonymous. Your identity is protected.";
      } else if (newMessage.toLowerCase().includes("map") || newMessage.toLowerCase().includes("safety")) {
        botResponse = "You can view the campus safety map by clicking on the 'Campus Map' button in the header. It shows safety scores and features for each location.";
      }
      
      setChatMessages(prev => [...prev, { id: prev.length + 1, text: botResponse, isUser: false }]);
    }, 1000);
  };

  const handleSubmitAnonymousMessage = () => {
    if (anonymousMessage.trim() === "") return;

    setMessageSent(true);

    setTimeout(() => {
      setAnonymousMessage("");
      setMessageSent(false);
    }, 3000);
  };

  const handleSubmitIssue = () => {
    if (issueDescription.trim() === "" || issueLocation.trim() === "") return;

    setIssueSent(true);

    setTimeout(() => {
      setIssueDescription("");
      setIssueLocation("");
      setIssueSent(false);
    }, 3000);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high": return "text-red-500";
      case "medium": return "text-orange-500";
      case "low": return "text-green-500";
      default: return "text-gray-500";
    }
  };

  const getPriorityDot = (priority) => {
    return (
      <span className={`inline-block w-3 h-3 rounded-full ${
        priority === "high" ? "bg-red-500" : 
        priority === "medium" ? "bg-orange-500" : "bg-green-500"
      }`}></span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      {/* Header */}
      <div className="bg-white p-6 shadow-md rounded-b-xl">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-xl shadow-md mr-4">A</div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Hello Ashley!</h1>
              <p className="text-gray-500">10 April 2025, Thursday</p>
            </div>
          </div>
          <div className="hidden md:block">
            <a 
              href="/campusmap" 
              className="px-4 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition-colors duration-200 cursor-pointer flex items-center"
            >
              <Map size={18} className="mr-2" />
              Campus Map
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
        <div className="space-y-8">
          {/* Status Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transform transition-all duration-500 ${animateCards ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <h2 className="text-white text-xl font-bold mb-4">Submit Anonymous Message</h2>
              <div className="space-y-3">
                <textarea 
                  className="w-full p-3 rounded-lg border border-teal-300 focus:ring-2 focus:ring-teal-300 focus:outline-none transition-shadow duration-200 bg-white bg-opacity-90"
                  placeholder="Type your anonymous message here..."
                  rows="3"
                  value={anonymousMessage}
                  onChange={(e) => setAnonymousMessage(e.target.value)}
                ></textarea>
                <button 
                  className={`w-full py-2 rounded-lg transition-all duration-300 font-medium ${
                    messageSent 
                      ? "bg-green-500 text-white" 
                      : "bg-white text-teal-600 hover:bg-teal-50"
                  }`}
                  onClick={handleSubmitAnonymousMessage}
                  disabled={messageSent}
                >
                  {messageSent ? "Message Sent!" : "Submit Anonymously"}
                </button>
                <p className="text-white text-opacity-80 text-sm text-center mt-2">
                  Your message will be completely anonymous.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <h2 className="text-white text-xl font-bold mb-4">Report an Issue</h2>
              <div className="space-y-3">
                <select 
                  className="w-full p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-shadow duration-200 bg-white bg-opacity-90"
                  value={reportIssueType}
                  onChange={(e) => setReportIssueType(e.target.value)}
                >
                  <option>Facilities</option>
                  <option>Security</option>
                  <option>Academic</option>
                  <option>Bullying</option>
                  <option>Other</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Location (e.g. Library, Room 204)"
                  className="w-full p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-shadow duration-200 bg-white bg-opacity-90"
                  value={issueLocation}
                  onChange={(e) => setIssueLocation(e.target.value)}
                />
                <textarea 
                  className="w-full p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-shadow duration-200 bg-white bg-opacity-90"
                  placeholder="Describe the issue..."
                  rows="2"
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                ></textarea>
                <button 
                  className={`w-full py-2 rounded-lg transition-all duration-300 font-medium ${
                    issueSent 
                      ? "bg-green-500 text-white" 
                      : "bg-white text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={handleSubmitIssue}
                  disabled={issueSent}
                >
                  {issueSent ? "Issue Reported!" : "Submit Report"}
                </button>
                <p className="text-white text-opacity-80 text-sm text-center mt-1">
                  All reports are anonymous and confidential.
                </p>
              </div>
            </div>
          </div>

          {/* Notice Board Section */}
          <div className={`bg-white rounded-xl shadow-lg p-6 transform transition-all duration-500 ${animateNotices ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-xl font-bold mb-6 text-teal-700 border-b pb-2">Notice Board</h2>
            <div className="space-y-4">
              {notices.map((notice, index) => (
                <div 
                  key={notice.id} 
                  className="border-l-4 border-gray-200 hover:border-teal-500 p-4 bg-white rounded-r-lg shadow-sm hover:shadow-md transition-all duration-200"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    animationDelay: `${index * 100}ms` 
                  }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    {getPriorityDot(notice.priority)}
                    <h3 className="font-semibold text-gray-800">{notice.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{notice.content}</p>
                  <div className="flex justify-between text-xs text-gray-400">
                    <div className="flex items-center">
                      <User size={12} className="mr-1" />
                      {notice.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {notice.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chatbot Icon with pulse animation */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          className={`p-4 rounded-full shadow-lg ${showChatbot ? 'bg-red-500' : 'bg-gradient-to-r from-teal-500 to-blue-500'} text-white transform hover:scale-110 transition-all duration-300`}
          onClick={() => setShowChatbot(!showChatbot)}
        >
          {showChatbot ? 
            <X size={24} className="animate-spin-once" /> : 
            <div className="relative">
              <MessageCircle size={24} />
              <span className={`absolute -top-1 -right-1 flex h-3 w-3 ${!showChatbot ? 'animate-ping-slow' : ''}`}>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
            </div>
          }
        </button>
      </div>


      {/* Chatbot Popup with slide in animation */}
      {showChatbot && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-30 animate-slide-in">
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Campus Assistant</h3>
            <button onClick={() => setShowChatbot(false)} className="text-white hover:text-red-200 transition-colors duration-200">×</button>
          </div>
          <div className="h-80 overflow-y-auto p-4" id="chatMessages">
            {chatMessages.map((message, index) => (
              <div 
                key={message.id} 
                className={`mb-3 ${message.isUser ? "text-right" : ""} animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`inline-block p-3 rounded-lg ${
                  message.isUser 
                    ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white" 
                    : "bg-gray-100 text-gray-800"
                } max-w-[80%] shadow-sm`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2 mb-3">
              <select 
                className="text-sm border rounded p-2 flex-1 focus:ring-2 focus:ring-teal-300 focus:outline-none transition-shadow duration-200"
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
              >
                <option>General</option>
                <option>Academic</option>
                <option>Bullying</option>
                <option>Facilities</option>
                <option>Security</option>
              </select>
              <button 
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors duration-200 shadow hover:shadow-md"
                title="Report Urgent Issue"
              >
                <AlertCircle size={16} />
              </button>
            </div>
            <div className="flex">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="border rounded-l p-2 flex-1 focus:ring-2 focus:ring-teal-300 focus:outline-none transition-shadow duration-200"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button 
                className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-2 rounded-r hover:shadow-md transition-all duration-200"
                onClick={handleSendMessage}
              >
                <Send size={20} />
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">
              Your messages are anonymous. We respect your privacy.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
