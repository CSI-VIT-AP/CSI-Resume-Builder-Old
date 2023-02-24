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
        <Grid>
            <ProgressBar/>
        </Grid>
        </>
        // <ThemeProvider theme={theme}>
        // </ThemeProvider>

     );
}
 
export default Home;