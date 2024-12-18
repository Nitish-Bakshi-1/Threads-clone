import React, { useRef } from "react";
import {
  Dialog,
  useMediaQuery,
  Box,
  DialogTitle,
  DialogContent,
  Stack,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const EditProfile = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const [pic, setPic] = useState();
  const [bio, setBio] = useState();

  const imageRef = useRef();

  const handlePhoto = () => {
    imageRef.current.click();
  };

  const handleUpdate = () => {};

  const handleClose = () => {};
  return (
    <>
      <Dialog
        open={true}
        onClose={handleClose}
        fullWidth
        fullScreen={_700 ? false : true}
      >
        <Box position={"absolute"} top={20} right={20} onClick={handleClose}>
          <RxCross2 size={28} />
        </Box>
        <DialogTitle textAlign={"center"} mb={5}>
          Edit profile
        </DialogTitle>
        <DialogContent>
          <Stack flexDirection={"column"} gap={1}>
            <Avatar
              src={pic ? URL.createObjectURL(pic) : null}
              alt=""
              sx={{ height: 96, width: 96, alignSelf: "center" }}
            />
            <Button
              size={"large"}
              sx={{
                border: "2px solid grey",
                borderRadius: "10px",
                width: 96,
                height: 40,
                alignSelf: "center",
                my: 2,
                ":hover": {
                  cursor: "pointer",
                },
              }}
              onClick={handlePhoto}
            >
              Change
            </Button>
            <input
              type="file"
              className="file-input"
              accept={"image/*"}
              ref={imageRef}
              onChange={(e) => {
                setPic(e.target.files[0]);
              }}
            />
            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              my={2}
            >
              username
            </Typography>
            <input
              type="text"
              value={"nitishbakshi"}
              readOnly
              className="text1"
            />
          </Stack>
          <Stack flexDirection={"column"} gap={1}>
            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              my={2}
            >
              email
            </Typography>
            <input
              type="text"
              value={"nitishbakshi"}
              readOnly
              className="text1"
            />
          </Stack>
          <Stack flexDirection={"column"} gap={1}>
            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              my={2}
            >
              Bio
            </Typography>
            <input
              type="text"
              className="text1"
              placeholder=""
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </Stack>
          <Button
            size="large"
            sx={{
              border: "2px solid grey",
              borderRadius: "10px",
              bgcolor: "GrayText",
              color: "white",
              width: "100%",
              my: 2,
              fontSize: "1.2rem",
              ":hover": {
                cursor: "pointer",
                bgcolor: "grey",
              },
            }}
            onClick={handleUpdate}
          >
            Update
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditProfile;
