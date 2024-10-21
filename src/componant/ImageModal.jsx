import React from "react";
import Backdrop from "@mui/material/Backdrop";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { CardMedia, Modal, Box, Fade, IconButton, Stack } from "@mui/material";
function ImageModal({
  open,
  handleClose,
  imgIndex,
  images,
  HandleNext,
  HandlePrevious,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90vw", md: "80vw" },
    height: { xs: "50vh", md: "80vh" },
    border: "2px solid #000",
    boxShadow: 24,
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 900,
          },
        }}
      >
        <Fade in={open} timeout={1000}>
          <Box sx={style}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ position: "absolute", width: "100%", height: "100%" }}
            >
              <IconButton onClick={HandlePrevious}>
                <ArrowBackIosIcon sx={{ color: "white", fontSize: 50 }} />
              </IconButton>

              <IconButton onClick={HandleNext}>
                <ArrowForwardIosIcon sx={{ color: "white", fontSize: 50 }} />
              </IconButton>
            </Stack>

            <CardMedia
              component="img"
              sx={{
                objectFit: { xs: "fill", md: "cover" },
                width: "100%",
                height: "100%",
              }}
              image={images[imgIndex]?.src}
              alt="title"
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ImageModal;
