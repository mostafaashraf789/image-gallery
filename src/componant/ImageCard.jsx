import Grid from "@mui/material/Grid2";
import { Card, CardMedia, Paper } from "@mui/material";

function Image({ img, index, setimgIndex, handleOpen }) {
  return (
    <Grid
      onClick={handleOpen}
      xs={12}
      sm={6}
      md={3}
      sx={{
        "&:hover": {
          transform: "scale(1.09)",
          transition: "transform 1s",
          cursor: "pointer",
        },
      }}
    >
      <Paper
        sx={{
          borderRadius: 2,
        }}
        onClick={() => {
          setimgIndex(index);
        }}
        elevation={10}
      >
        <Card sx={{ borderRadius: 2 }}>
          <CardMedia
            component="img"
            height="250"
            image={img.src}
            alt="title"
            sx={{
              "&:hover": {
                transform: "scale(1.09)",
                transition: "transform 1s",
              },
            }}
          />
        </Card>
      </Paper>
    </Grid>
  );
}

export default Image;
