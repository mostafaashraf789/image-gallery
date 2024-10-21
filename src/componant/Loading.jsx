import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
function Loading() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
      <CircularProgress color="success" />
    </Box>
  );
}

export default Loading;
