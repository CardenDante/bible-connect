// //src/components/chat/LiveChatWithPresence.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import { Card, CardHeader, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { MessageCircle, Send, X, User, Users } from 'lucide-react';
// import { websocketService } from '@/services/websocket';
// import { presenceService } from '@/services/presenceService';
// import { useAuth } from '@/contexts/AuthContext';
// import { PresenceIndicator } from '@/components/presence/PresenceIndicator';

// export const LiveChatWithPresence = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showUserList, setShowUserList] = useState(false);
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [activeUsers, setActiveUsers] = useState([]);
//   const { user } = useAuth();
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     if (isOpen) {
//       // Connect services
//       websocketService.connect(user?.token);
//       presenceService.initialize();

//       // Set initial status
//       presenceService.setUserStatus('online');

//       // Subscribe to presence updates
//       const unsubscribe = presenceService.subscribeToPresence((users) => {
//         setActiveUsers(users);
//       });

//       // Subscribe to chat messages
//       websocketService.onChatMessage((message) => {
//         setMessages(prev => [...prev, message]);
//       });

//       // Set up window focus/blur handlers
//       const handleFocus = () => presenceService.setUserStatus('online');
//       const handleBlur = () => presenceService.setUserStatus('away');

//       window.addEventListener('focus', handleFocus);
//       window.addEventListener('blur', handleBlur);

//       return () => {
//         unsubscribe();
//         presenceService.setUserStatus('offline');
//         presenceService.cleanup();
//         websocketService.removeAllListeners();
//         websocketService.disconnect();
//         window.removeEventListener('focus', handleFocus);
//         window.removeEventListener('blur', handleBlur);
//       };
//     }
//   }, [isOpen, user]);

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [messages]);

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     if (!message.trim()) return;

//     const newMessage = {
//       id: Date.now(),
//       content: message,
//       sender: user.id,
//       senderName: user.name,
//       timestamp: new Date().toISOString(),
//     };

//     websocketService.sendMessage(newMessage);
//     setMessage('');
//   };

//   if (!isOpen) {
//     return (
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed bottom-4 right-4 bg-indigo-600 text-white rounded-full p-3 shadow-lg hover:bg-indigo-700"
//       >
//         <MessageCircle className="h-6 w-6" />
//       </button>
//     );
//   }

//   const onlineCount = activeUsers.filter(([_, data]) => data.status === 'online').length;

//   return (
//     <div className="fixed bottom-4 right-4 w-96 shadow-xl">
//       <Card className="h-[500px] flex flex-col">
//         <CardHeader className="border-b">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <MessageCircle className="h-5 w-5 text-indigo-500 mr-2" />
//               <div>
//                 <h3 className="text-lg font-medium">Community Chat</h3>
//                 <div className="text-sm text-gray-500 flex items-center">
//                   <Users className="h-4 w-4 mr-1" />
//                   {onlineCount} online
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={() => setShowUserList(!showUserList)}
//                 className="text-gray-400 hover:text-gray-500"
//               >
//                 <Users className="h-5 w-5" />
//               </button>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="text-gray-400 hover:text-gray-500"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </CardHeader>

//         <CardContent className="flex-1 overflow-y-auto p-4">
//           {showUserList ? (
//             <div className="space-y-3">
//               {activeUsers.map(([userId, data]) => (
//                 <div key={userId} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
//                   <div className="flex items-center">
//                     <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
//                       <User className="h-5 w-5 text-gray-500" />
//                     </div>
//                     <div>
//                       <div className="font-medium text-sm">
//                         {userId === user.id ? `${user.name} (You)` : userId}
//                       </div>
//                       <PresenceIndicator
//                         status={data.status}
//                         lastSeen={data.lastSeen}
//                         showText
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {messages.map((msg) => (
//                 <div
//                   key={msg.id}
//                   className={`flex ${msg.sender === user.id ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <div className={`flex items-start max-w-[75%] ${
//                     msg.sender === user.id ? 'flex-row-reverse' : 'flex-row'
//                   }`}>
//                     <div className="flex-shrink-0">
//                       <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
//                         <User className="h-5 w-5 text-gray-500" />
//                       </div>
//                       <div className="mt-1">
//                         {activeUsers.get(msg.sender) && (
//                           <PresenceIndicator
//                             status={activeUsers.get(msg.sender).status}
//                             lastSeen={activeUsers.get(msg.sender).lastSeen}
//                           />
//                         )}
//                       </div>
//                     </div>
//                     <div className={`mx-2 ${
//                       msg.sender === user.id
//                         ? 'bg-indigo-600 text-white'
//                         : 'bg-gray-100 text-gray-800'
//                     } rounded-lg px-4 py-2`}>
//                       <p className="text-sm font-medium">{msg.senderName}</p>
//                       <p className="text-sm">{msg.content}</p>
//                       <p className="text-xs mt-1 opacity-75">
//                         {new Date(msg.timestamp).toLocaleTimeString()}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               <div ref={messagesEndRef} />
//             </div>
//           )}
//         </CardContent>

//         <div className="border-t p-4">
//           <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
//             <Input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type your message..."
//               className="flex-1"
//             />
//             <Button type="submit" size="icon">
//               <Send className="h-4 w-4" />
//             </Button>
//           </form>
//         </div>
//       </Card>
//     </div>
//   );
// };
// export { LiveChat };
// export default LiveChat;
// src/components/chat/LiveChat.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X, User } from 'lucide-react';

function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now(),
      text: newMessage,
      timestamp: new Date().toISOString(),
      sender: 'user'
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full p-3 bg-indigo-600 hover:bg-indigo-700"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 shadow-xl">
      <Card>
        <CardHeader className="flex flex-row justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-indigo-600" />
            <span className="font-medium">Live Chat</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>

        <CardContent className="p-0">
          <div className="h-96 flex flex-col">
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`flex items-start max-w-[75%] ${
                      message.sender === 'user'
                        ? 'flex-row-reverse'
                        : 'flex-row'
                    }`}
                  >
                    <div className="flex-shrink-0 mx-2">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <User className="h-5 w-5 text-gray-500" />
                      </div>
                    </div>
                    <div
                      className={`px-4 py-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs mt-1 opacity-75">
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <form 
              onSubmit={handleSendMessage} 
              className="border-t p-4 flex gap-2"
            >
              <Input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" variant="primary">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Export as both default and named export for flexibility
export { LiveChat };
export default LiveChat;