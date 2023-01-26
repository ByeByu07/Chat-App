import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LeftBar from '../component/LeftBar.chat';
import RightBar from '../component/RightBar.chat';
import upperFirstLetter from '../utilities/upperFirstLetter';

type ChatProps = {
  username:string
  room:string,
  socket:any //perlu di-fix
}

export default function Chat({username, room, socket}:ChatProps) {

  const [message,setMessage] = useState([]);
  const navigate = useNavigate();
  
  const sendMessage = () => {
    socket.emit('send-message',{
      message,
      username,
      createdTime: Date.now()
    });
  }

  const leaveRoom = () => {
    socket.leave(room);
    navigate('/join');
  }

  return <div className="container flex">
    <LeftBar username={username} socket={socket} leaveRoom={leaveRoom}/>
    <RightBar room={room} sendMessage={sendMessage} setMessage={setMessage} message={message} socket={socket}/>
  </div>
}
