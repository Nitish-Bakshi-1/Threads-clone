import React from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  Stack,
  Typography,
} from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { FaImages } from "react-icons/fa";
import { BiBorderRadius } from "react-icons/bi";

const AddPost = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const _500 = useMediaQuery("(min-width:500px)");
  const _300 = useMediaQuery("(min-width:300px)");

  const handleClose = () => {};

  return (
    <>
      <Dialog
        open={true}
        onClose={handleClose}
        fullWidth
        fullScreen={_700 ? false : true}
      >
        <Box position={"absolute"} top={20} right={20} onclick={handleClose}>
          <RxCross2 size={28} className="image-icon" />
        </Box>
        <DialogTitle textAlign={"center"} mb={5}>
          New thread ...
        </DialogTitle>
        <DialogContent>
          <Stack flexDirection={"row"} g={2} mb={5}>
            <Avatar src="" alt="" />
            <Stack>
              <Typography variant="h6" fontWeight={"bold"} fontSize={"1rem"}>
                NitishBakhi001
              </Typography>
              <textarea
                cols={_500 ? 40 : 25}
                rows={2}
                className="text1"
                placeholder="Start a thread..."
                autoFocus
              />
              <img
                src=""
                alt=""
                id="url-img"
                width={_500 ? 300 : _300 ? 200 : 100}
                height={_500 ? 300 : _300 ? 200 : 100}
              />
              <FaImages size={28} className="image-icon" />
              <input type="file" accept="image/*" className="file-input" />
            </Stack>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h6" fontSize={"1rem"} color={"gray"}>
              Anyone can reply...
            </Typography>
            <Button
              size={"large"}
              sx={{
                bgColor: "GrayText",
                color: "white",
                BiBorderRadius: "10px",
                ":hover": {
                  bgcolor: "gray",
                  cursor: "pointer",
                },
              }}
            >
              Post
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddPost;
