import React from 'react'
import Navbar from '../components/Navbar';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// const theme = createTheme({
//     palette:{
//         primary: {
//             main:  '#BAFE66'

//         },
//         secondary:{
//             main: "#111727"
//         },
//         typography: {
//             body1: {
//               fontWeight: 600 // or 'bold'
//             }
//           }
        
//     }
// });


const Home = () => {
    return ( 
        <>
            <Navbar/>

        </>
        // <ThemeProvider theme={theme}>
        // </ThemeProvider>

     );
}
 
export default Home;