import EducationForm from '../components/EducationForm';
import Grid from '@mui/material/Grid';
import Navbar from '../components/Navbar';

const Education = () => {
    return ( 
        <>
            <div>
      <Navbar/>
      
      <Grid container spacing={2}>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={8} >
            <EducationForm/>
          </Grid>
      </Grid>
    </div>
        </>
     );
}
 
export default Education;