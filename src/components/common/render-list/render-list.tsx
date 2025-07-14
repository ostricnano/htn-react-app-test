import { Box, Typography } from "@mui/material";
import React from "react";

interface ListProps<T> {
  title: string;
  program: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  getItemKey?: (item: T, index: number) => string | number;
}

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "15px",
  alignSelf: "stretch",
  padding: "0 0 50px 0",
} as const;

const listStyles = {
  display: "flex",
  alignItems: "flex-start",
  gap: "15px",
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
          <React.Fragment key={getItemKey(item, index)}>
            {renderItem(item, index)}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default React.memo(RenderCardList) as typeof RenderCardList;
