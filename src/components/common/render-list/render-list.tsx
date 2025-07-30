import { Box, Typography } from "@mui/material";
import React from "react";

interface ListProps<T> {
  title: string;
  program: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  getItemKey?: (item: T, index: number) => string | number;
}

const containerStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "15px",
  alignSelf: "stretch",
  padding: "0 60px 50px 60px",
  "@media (max-width: 730px)": {
    padding: "0 20px 50px 20px",
    gap: "15px",
  },
} as const;

const listStyles = {
  display: "flex",
  alignItems: "flex-start",
  flexWrap: "wrap",
  gap: "15px",
  width: "100%",
  "@media (max-width: 730px)": {
    flexWrap: "nowrap",
    overflowX: "auto",
    overflowY: "hidden",
    scrollBehavior: "smooth",
    WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
    "&::-webkit-scrollbar": {
      display: "none", // Hide scrollbar for webkit browsers
    },
    msOverflowStyle: "none", // Hide scrollbar for IE and Edge
    scrollbarWidth: "none", // Hide scrollbar for Firefox
  },
} as const;

const itemWrapperStyles = {
  "@media (max-width: 730px)": {
    flexShrink: 0, // Prevent items from shrinking
    minWidth: 'auto', // Minimum width for cards on mobile
  },
} as const;

const RenderCardList = <T,>({
  title,
  program,
  renderItem,
  getItemKey = (_, index) => index
}: ListProps<T>) => {
  return (
    <Box sx={containerStyles}>
      <Typography variant="h3">{title}</Typography>
      <Box sx={listStyles}>
        {program.map((item, index) => (
          <Box key={getItemKey(item, index)} sx={itemWrapperStyles}>
            {renderItem(item, index)}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default React.memo(RenderCardList) as typeof RenderCardList;
