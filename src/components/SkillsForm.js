import Typography from "@mui/material/Typography";
import { TextField, Button, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Form.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#111727",
    },
    secondary: {
      main: "#111727",
    },
    typography: {
      body1: {
        fontWeight: 600, // or 'bold'
      },
    },
  },
});

const SkillsForm = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="form">
          <Typography component="h1" variant="h4" className="textfeild1">
            Now, It's right to add your Skills.
          </Typography>
          <Typography component="h7" variant="h7" className="textfeild2">
            Let your Recruiter know about you Skills !
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} sx={{ mt: 1, ml: 6, mr: 1, md: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="FirstName"
                label="FirstName"
                name="FirstName"
                autoComplete="FirstName"
                autoFocus
              />
            </Grid>
            <Grid item xs={4} sx={{ mt: 1, ml: 1, mr: 1, md: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="LastName"
                label="LastName"
                name="LastName"
                autoComplete="LastName"
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6} sx={{ mt: 1, ml: 6, mr: 1, md: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Email"
                label="Email"
                name="Email"
                autoComplete="Email"
                autoFocus
              />
            </Grid>
            <Grid item xs={4} sx={{ mt: 1, ml: 1, mr: 1, md: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="ContactNumber"
                label="ContactNumber"
                name="ContactNumber"
                autoComplete="ContactNumber"
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6} sx={{ mt: 1, ml: 6, mr: 1, md: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="LinkedIn Profile Link"
                label="LinkedIn Profile Link"
                name="LinkedIn Profile Link"
                autoComplete="LinkedIn Profile Link"
                autoFocus
              />
            </Grid>
            <Grid item xs={4} sx={{ mt: 1, ml: 1, mr: 1, md: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="City"
                label="City"
                name="City"
                autoComplete="City"
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid item xs={8} sx={{ mt: 1, ml: 6, mr: 1, md: 1 }}>
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              fullWidth
              multiline
              rows={4}
              defaultValue="Default Value"
            />
          </Grid>
          <Grid item xs={5} sx={{ mt: 2, ml: 6, mr: 1, md: 5 }}>
            <Button variant="contained" fullWidth>
              Contained
            </Button>
          </Grid>
        </div>
      </ThemeProvider>
    </>
  );
};

export default SkillsForm;
