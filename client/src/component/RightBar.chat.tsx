import React, { useEffect, useState } from 'react'
import upperFirstLetter from '../utilities/upperFirstLetter'

type RightBarProps = {
    room:string
    message:MessageArray
    setMessage: (e:MessageArray)=> void
    sendMessage: ()=> void
    socket: any
}

type MessageDetails = {
    message: string,
    username: string,
    createdTime: string
}
  
type MessageArray = {
    [key:string]:MessageDetails
}
  
export default function RightBar({room,setMessage,sendMessage,message,socket}:RightBarProps) {

    useEffect(() => {
        socket.on('receive-message', (data:MessageArray) => {
            setMessage((state:MessageArray) => [
                // ...state,
                {
                    message: data.message,
                    username: data.username,
                    createdTime: data.createdTime
                }
            ])
            console.log(data);
        })
    }, [socket])
 
  return <section className='basis-4/5 bg-slate-300 h-screen'>
    <h1 className='text-4xl text-center p-2'>Room : {upperFirstLetter(room)}</h1>
    <div id='container-message'>
        {message.message}
    </div>
    <div className='fixed bottom-5 right-5 flex'>
        <input type="text" className='py-3 bg-slate-500 w-96' onChange={(e) => setMessage(e.target.value)}/>
        <button className='py-3 px-5 bg-green-500 rounded' onClick={sendMessage}>Send</button>
    </div>
</section>
}
