import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
import audo from './ad.mp3'
import React from 'react';



const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="d715ca73-1e04-4ef8-b25a-3cec887a259f"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio({audo}).play()}
      renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => {}}
      renderIsTyping={(typers) => {}}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
