import { useNavigate } from "react-router-dom"

type JoinProps = {
  username:string
  setUsername: (e:string) => void,
  room:string,
  setRoom: (e:string) => void
  socket:any //perlu di-fix
}

export default function Join({username, setUsername, room, setRoom, socket}:JoinProps) {

  const navigate = useNavigate();

  const joinRoom = () => {
    if(username !== '' && room !== ''){
      socket.emit('join_room',{username,room});
      navigate('/chat', {replace:true})
    }
  }

  return (
    <div className='bg-black h-screen flex justify-center items-center'>
      <div className='bg-sky-500 p-5 rounded flex flex-col gap-5'>
        <h2 className='text-center'>Chat App</h2>
        <input type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        {/* <input type="number" placeholder='code' value={room} onChange={(e)=> setRoom(e.target.value)}/> */}
        <select value={room} onChange={e => setRoom(e.target.value)}>
          <option value=""></option>
          <option value="asparagus">Asparagus</option>
          <option value="astagaaa">Astaga</option>
        </select>
        <button className='bg-red-700 hover:bg-red-500 rounded' onClick={joinRoom}>Join Room</button>
      </div>
    </div>
  )
}
