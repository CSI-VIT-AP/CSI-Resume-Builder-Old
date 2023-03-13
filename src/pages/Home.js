import { Box, Grid } from '@mui/material';
import React from 'react'
import Navbar from '../components/Navbar';
import ProgressBar from '../components/ProgressBar';


const Home = () => {
    return ( 
        <>
       
        <Box>
        <Navbar/>
        </Box>
        <Grid container my={4}>
            <Grid item xs= {3}>
                <ProgressBar/>
            </Grid>
            <Grid item xs={9}>

            </Grid>

        </Grid>
        </>
        // <ThemeProvider theme={theme}>
        // </ThemeProvider>

     );
}
 
export default Home;