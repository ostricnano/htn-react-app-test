import { Box, IconButton, Modal } from "@mui/material";
import React from "react";
import { CloseIcon } from "@icons/close-icon";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  width: "433px",
  padding: "30px 20px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  backgroundColor: "#E6E6E6",
  borderRadius: "16px"
};

interface BaseModalProps {
  children?: React.ReactNode;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  onClose?: () => void;
}

const CustomModal: React.FC<BaseModalProps> = ({
  children,
  openModal,
  setOpenModal,
  onClose = () => setOpenModal(false),
}) => {
  return (
    <Modal
      open={openModal}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <IconButton
          onClick={onClose}
          disableRipple
          sx={{
            position: "absolute",
            top: "30px",
            right:"20px",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
