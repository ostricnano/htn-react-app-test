import React from "react";
import { Box, Typography } from "@mui/material";
import { LiveIcon } from "@icons/live-icon";
import { tagStyles } from "./tag-styles";
import PremiumIcon from "@icons/premium-icon";
import type { SxProps, Theme } from "@mui/material";

export type TagType =
  | "live"
  | "livePremium"
  | "upcoming"
  | "past"
  | "block"
  | "timeLeft"
  | "replay"
  | "premium";

export interface TagProps {
  type: TagType;
  isPremium?: boolean;
  content?: string;
  showIcon?: boolean;
  sx?: SxProps<Theme>;
}

const Tag: React.FC<TagProps> = ({ type, content, sx, showIcon= true }) => {
  const getTagContent = () => {
    switch (type) {
      case "live":
        return (
          <Box
            sx={{
              ...tagStyles.tag,
              padding: "5px",
              borderRadius: "4px",
              backgroundColor: "#D81F27",
            }}
          >
            {showIcon && <LiveIcon />}
            <Typography
              sx={{
                ...tagStyles.textTag,
                color: "#fffff",
              }}
            >
              {content}
            </Typography>
          </Box>
        );
      case "livePremium":
        return (
          <Box
            sx={{
              ...tagStyles.tag,
              padding: "5px",
              borderRadius: "4px",
              backgroundColor: "#D81F27",
            }}
          >
            <PremiumIcon />
            <Typography
              sx={{
                ...tagStyles.textTag,
                color: "#fffff",
              }}
            >
              {content}
            </Typography>
          </Box>
        );
      case "upcoming":
        return <Box></Box>;
      case "past":
        return (
          <Box
            sx={{
              ...tagStyles.tag,
              borderRadius: "10px",
              border: "1px solid #E2E2E2",
              background: "rgba(255, 255, 255, 0.90)",
              padding: "4px 8px",
            }}
          >
            <Typography
              sx={{
                ...tagStyles.textTag,
                color: "#0F1014",
              }}
            >
              {content}
            </Typography>
          </Box>
        );
      case "block":
        return <Box></Box>;
      case "timeLeft":
        return (
          <Box
            sx={{
              ...tagStyles.tag,
              borderRadius: "10px",
              border: "1px solid #E2E2E2",
              background: "rgba(255, 255, 255, 0.90)",
              padding: "4px 8px",
            }}
          >
            <Typography
              sx={{
                ...tagStyles.textTag,
                color: "#0F1014",
              }}
            >
              {content}
            </Typography>
          </Box>
        );
      case "replay":
        return (
          <Box
            sx={{
              ...tagStyles.tag,
              backgroundColor: "#000",
              padding: "4px 8px",
              borderRadius: "4px",
            }}
          >
            <Typography
              sx={{
                ...tagStyles.textTag,
                color: "#fff",
              }}
            >
              {content}
            </Typography>
          </Box>
        );
      case "premium":
        return (
          <Box
            sx={{
              ...tagStyles.textTag,
              borderRadius: "4px",
              backgroundColor: "#fff",
              padding: " 3px 5px",
            }}
          >
            <PremiumIcon stroke="#000" />
          </Box>
        );
      default:
        return null;
    }
  };

  return <Box sx={sx}>{getTagContent()}</Box>;
};

export default Tag;
