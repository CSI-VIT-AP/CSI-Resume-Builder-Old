import React from "react";
import "./EducationForm.css";
import { Typography,Grid, Button, Checkbox, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
const EducationForm = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="form">
        <Typography component="h1" variant="h4" className="textfeild1">
          {" "}
          Add a bit about your Education{" "}
        </Typography>
        <Typography component="h7" variant="h7" className="textfeild2">
          {" "}
          Let your Recruiters know your Education Background
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ mt: 1, ml: 6, mr: 1, md: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Degree"
              label="Degree"
              name="Degree"
              autoComplete="Degree"
              autoFocus
            />
          </Grid>

          <Grid item xs={4} sx={{ mt: 1, ml: 1, mr: 1, md: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Field of Study"
              label="Field of Study"
              name="Field of Study"
              autoComplete="Field of Study"
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
              id="College Name"
              label="College Name"
              name="College Name"
              autoComplete="College Name"
              autoFocus
            />
          </Grid>

          <Grid item xs={4} sx={{ mt: 1, ml: 1, mr: 1, md: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Location"
              label="Location"
              name="Location"
              autoComplete="Location"
              autoFocus
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={3} sx={{ mt: 1, ml: 6, mr: 0, md: 1 }}>
            <TextField
              margin="normal"
              required
              id="Current CGPA"
              label="Current CGPA"
              name="Current CGPA"
              autoComplete="Current CGPA"
              autoFocus
            />
          </Grid>

          <Grid item xs={3} sx={{ mt: 1, ml: 1, mr: 1, md: 1 }}>
            <TextField
              margin="normal"
              required
              id="Start Year"
              label="Start Year"
              name="Start Year"
              autoComplete="Start Year"
              autoFocus
            />
          </Grid>

          <Grid item xs={3} sx={{ mt: 1, ml: 1, mr: 1, md: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="End Year"
              label="End Year"
              name="End Year"
              autoComplete="End Year"
              autoFocus
            />
          </Grid>
        </Grid>

        <Grid container  sx={{ mt: 1, ml: 0, mr: 1, md: 1 , maxWidth: 300, display: "flex" , justifyContent: "center", alignItems: "center", position:"relative", left:7}}  justify = "center">
            <Checkbox/>
            <Typography  component="h7" variant="h7" sx={{position: "relative", }} >
                I'm currently Studying here
            </Typography>
        </Grid>
        <Grid item xs={5} sx={{ mt: 8, ml: 6, mr: 1, md: 1 }}>
          <Button fullWidth variant="outlined">
            Add another Section in Education
          </Button>
        </Grid>

        <Grid item xs={5} sx={{ mt: 2, ml: 6, mr: 1, md: 5 }}>
          <Button variant="contained" fullWidth>
            Continue
          </Button>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default EducationForm;
