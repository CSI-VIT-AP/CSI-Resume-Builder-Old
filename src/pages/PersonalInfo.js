import React from 'react'
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import Grid from '@mui/material/Grid';

const PersonalInfo = () => {
  return (
    <div>
      <Navbar/>
      
      <Grid container spacing={2}>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={8} >
            <Form/>
          </Grid>
      </Grid>
    </div>
  )
}

export default PersonalInfo
