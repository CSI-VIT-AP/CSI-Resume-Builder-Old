import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function CircularProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleButtonClick = () => {
    setProgress((prevProgress) =>
      prevProgress >= 100 ? 0 : prevProgress + 10
    );
  };

  return (

    <>
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" value={progress} size={250} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
        }}
      >
        <Typography variant="h3" component="div" color="text.secondary">
          {`${Math.round(progress)}%`}
        </Typography>
      </Box>
    </Box>
      <Button onClick={handleButtonClick}>Increase Progress</Button>
</>
  );
}

export default CircularProgressBar;
