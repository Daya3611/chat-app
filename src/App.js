import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

import React from 'react';



const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="b3850579-bf8a-468c-a689-443644bd4898"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => {}}
      renderIsTyping={(typers) => {}}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
