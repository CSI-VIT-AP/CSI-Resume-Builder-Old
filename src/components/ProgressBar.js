import CircularProgress from '@mui/joy/CircularProgress';

const ProgressBar = () => {
    return ( 
        <>
        <h1>This is a progress bar</h1>
        <CircularProgress determinate value={25} />
       
        </>
        
     );
}
 
export default ProgressBar;