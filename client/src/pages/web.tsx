import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <div className='bg-slate-900 flex justify-center h-screen items-center'>
      <Button 
        variant='outlined' 
        size='large'
      >
        <Link to={'/join'}>
          Ready To Join Room?
        </Link>
      </Button>
    </div>
  )
}
