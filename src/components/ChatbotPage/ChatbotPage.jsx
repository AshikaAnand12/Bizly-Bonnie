import React from 'react'
import {Chatbot} from "react-chatbot-kit";
import { useNavigate } from 'react-router-dom';
import 'react-chatbot-kit/build/main.css';
import './ChatbotPage.css'

import config from "../../chatbot/config";
import MessageParser from "../../chatbot/MessageParser";
import ActionProvider from "../../chatbot/ActionProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft,faCalendar, faSquarePlus } from '@fortawesome/free-solid-svg-icons'

const ChatbotPage = () => {
  const navigate = useNavigate();
  const handleEventClick = () => {
    alert('New Event Clicked')
  }
  const handleBackClick = () => {
    navigate('/')
  }
  const handleChatClick = () => {
    alert('Chat Clicked')
  }

  return (
    <div className='chatbot'>
      <div className="column11">
        <div className='subcolumn'>
          <h2>Bonnie</h2>
          <div >
            <button className='neweventbutton' onClick={handleBackClick}><FontAwesomeIcon icon={faAnglesLeft} /></button>
          </div>
        </div>  
        <div className='subcolumn'>
          <h5>Events</h5>
          <button className='neweventbutton' onClick={handleEventClick}>+ New Event</button>
        </div>
        <div className='subcolumn'>
          <span><FontAwesomeIcon icon={faCalendar} /> SF Customer Event </span>
          <span className="fa fa-star unchecked"></span>
        </div>
        <div className='subcolumn'>
          <span><FontAwesomeIcon icon={faCalendar} /> Marin Offsite </span>
          <span className="fa fa-star unchecked"></span>
        </div>
        <div className='subcolumn'>
          <span><FontAwesomeIcon icon={faCalendar} /> Oakland HQ Event </span>
          <span className="fa fa-star unchecked"></span>
        </div>
        <div className='subcolumn'>
          <button className='neweventbutton' onClick={handleEventClick}><FontAwesomeIcon icon={faSquarePlus} /> New Event </button>
        </div>

          
      </div>
      <div className="column12">
        <div className='subcolumn'>
          <h2>SF Customer Event</h2>
          <div className='topbuttons'>
            <button className='topbutton' onClick={handleChatClick}>Chat</button>
          </div>
        </div>
        <Chatbot style={{}}config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
      </div>
    </div>
  )
}

export default ChatbotPage