import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import {io}  from 'socket.io-client'
import Join from './pages/Join'
import Home from './pages/web'
import Chat from './pages/Chat'

const socket = io('http://localhost:4000');

export default function App() {

  const [username,setUsername] = useState('');
  const [room,setRoom] = useState('public');


  return <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/join' element={<Join 
        username={username}
        setUsername={setUsername}
        room={room}
        setRoom={setRoom}
        socket={socket}
      />}
      ></Route>
      <Route path='/chat' element={<Chat
        username={username}
        room={room}
        socket={socket}
      />}></Route>
      {/* <Route path='/login' element={}></Route>
      <Route path='/register' element={}></Route> */}
  </Routes>
}
