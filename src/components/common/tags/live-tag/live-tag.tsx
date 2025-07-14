import { Box, Typography } from "@mui/material";
import { LiveIcon } from "@icons/live-icon";

const LiveTag = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px",
        gap: "7px",
        borderRadius: "4px",
        backgroundColor: "#D81F27",
        zIndex: 99,
      }}
    >
      <LiveIcon />
      <Typography
        sx={{
          color: "#FFF",
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "100%",
        }}
      >
        LIVE
      </Typography>
    </Box>
  );
};

export default LiveTag;
