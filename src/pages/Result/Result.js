import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./result.css"

const Result = ({name, score}) => {
  const navigate = useNavigate();

useEffect(()=>{
  if(!name){
    navigate("/")
  }
},[name, navigate])


  return (
    <div className='result'>
      <span>Final Score : {score}</span>
      <Button
      variant='contained'
      color='secondary'
      size="large"
      style={{alignSelf:"center", marginTop:20}}
      href="/"
      >
      Go To HomePage
      </Button>
    </div>
  )
}

export default Result