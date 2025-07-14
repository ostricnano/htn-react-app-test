import { Box, OutlinedInput } from "@mui/material";
import iconSearch from "@assets/icons/Icon-search.png";


const TextInput = () => {
  return (
    <Box
      sx={{
        padding: "16px",
        position: "relative",
      }}
    >
      <OutlinedInput
        placeholder="Search"
        size="small"
        startAdornment={
          <Box
            component="img"
            className="search-icon"
            src={iconSearch}
            sx={{
              position: "absolute",
              left: "1rem",
              top: ".5rem",
              transform: "translateY(50%)",
              width: "21px",
              height: "21px",
            }}
          />
        }
        autoFocus={false}
        sx={{
          border: "none",
          borderRadius: "6px",
          backgroundColor: "#2E2E2E",
          color: "#CDCDCD",
          width: "360px",
          height: "56px",
          padding: "10px 50px",
        }}
      />
    </Box>
  );
};

export default TextInput;
