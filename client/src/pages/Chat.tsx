import React, { useState } from 'react'
import LeftBar from '../component/LeftBar.chat';
import RightBar from '../component/RightBar.chat';
import upperFirstLetter from '../utilities/upperFirstLetter';

type ChatProps = {
  username:string
  room:string,
  socket:any //perlu di-fix
}

export default function Chat({username, room, socket}:ChatProps) {

  const [message,setMessage] = useState('');
  
  const sendMessage = () => {
    socket.emit('send-message',message);
  }

  return <div className="container flex">
    <LeftBar username={username} socket={socket}/>
    <RightBar room={room} sendMessage={sendMessage} setMessage={setMessage} socket={socket}/>
  </div>
}
