import Grid from '@mui/material/Grid';
import Navbar from '../components/Navbar';
import SkillsForm from '../components/SkillsForm';

const Skills = () => {
    return ( 
        <>
         <div>
      <Navbar/>
      
      <Grid container spacing={2}>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={8} >
            <SkillsForm/>
          </Grid>
      </Grid>
    </div>
        </>
     );
}
 
export default Skills;