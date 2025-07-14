import { Box, FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import { SortByIcon } from "@icons/sort-by-icon";
import { ChevronDownIcon } from "@icons/chevron-down-icon";

const DropdownInput = () => {
  const [value, setValue] = React.useState('');
  return (
    <FormControl>
      <Select
        value={value}
        displayEmpty
        onChange={(e) => setValue(e.target.value)}
        inputProps={{ "aria-label": "Sort by" }}
        IconComponent={ChevronDownIcon}
        sx={{
          width: 220,
          height: 56,
          backgroundColor: "#2E2E2E",
          color: "#fff",
        }}
        renderValue={(selected) => {
          if (!selected) {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "#aaa",
                }}
              >
                <SortByIcon fontSize="small" />
                Sort by
              </Box>
            );
          }
          return selected;
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "#1E1E1E",
              color: "#fff",
              "& .MuiMenuItem-root:hover": {
                backgroundColor: "#444",
              },
            },
          },
        }}
      >
        <MenuItem disabled value="">
          Sort by
        </MenuItem>
        <MenuItem value="Option 1">Option 1</MenuItem>
        <MenuItem value="Option 2">Option 2</MenuItem>
        <MenuItem value="Option 3">Option 3</MenuItem>
        <MenuItem value="Option 4">Option 4</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DropdownInput;
