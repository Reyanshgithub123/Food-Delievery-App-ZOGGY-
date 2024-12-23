import React from 'react'
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../ChatbotConfig';
import MessageParser from '../MessageParser';
import ActionProvider from '../ActionProvider';
export default function Contactop() {
  return (
    <div className='container '>
        <div className='jodd'>
        Any error you can contact me in my github profile
        <h1>ZOOGY Express</h1>
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
        </div>

    
      
    </div>
  )
}
