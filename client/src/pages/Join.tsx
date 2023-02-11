import { useNavigate } from "react-router-dom"
import { Card, CardActions, CardContent, Typography, Box, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button} from "@mui/material"

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
    <div className='bg-slate-900 h-screen flex justify-center items-center'>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5">
            Chat App - ByeByu07
          </Typography>
          <Box className="my-5"> 
            <TextField
              fullWidth
              id="outlined-password-input"
              label="Username"
              type="text"
              value={username}
              size="small"
              autoComplete="current-password"
              onChange={(e)=> setUsername(e.target.value)}
            />
          </Box>
          <Box className="my-5">
            <FormControl  
              fullWidth
              size="small"
            >
            <InputLabel id="demo-simple-select-helper-label">Room</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={room}
              label="Room"
              onChange={(e)=> setRoom(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="ceciulisu">Ceciulisu</MenuItem>
              <MenuItem value="boondaries">Boondaries</MenuItem>
              <MenuItem value="asparagues">Asparagues</MenuItem>
            </Select>
            </FormControl>
          </Box>
          <Box className="mt-5">
            <Button fullWidth variant="contained" onClick={joinRoom}>Join Room</Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  )
}
