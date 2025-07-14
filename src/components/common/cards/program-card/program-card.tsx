import { Box, Button, IconButton, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { programCardStyles } from "./program-card-styles";
import playIcon from "@assets/icons/play-icon.png";
import Tag from "@components/common/tags/tag";
import UnsavedIcon from "@/icons/unsaved-icon";
import { useState, useCallback, useMemo } from "react";
import CustomModal from "@/components/common/modals/custom-modal";
import { DeleteIcon } from "@/icons/delete-icon";
import React from "react";

export interface ProgramCardProps {
  id: number;
  homeTeam: string;
  visitingTeam: string;
  venue: string;
  programImg: string;
  isLive?: boolean;
  startWatching?: boolean;
  timeLeft?: string;
  isSaved?: boolean;
}

// Move styles outside component
const imageContainerStyles = {
  position: "relative",
} as const;

const headerStyles = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
} as const;

const modalContentStyles = {
  marginTop: "60px",
} as const;

const modalButtonsStyles = {
  display: "flex",
  gap: "20px",
} as const;

const noButtonStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textTransform: "none",
  border: "2px solid black",
  borderRadius: "8px",
} as const;

const yesButtonStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textTransform: "none",
  backgroundColor: "#D81F27",
  borderRadius: "8px",
  color: "#fff",
} as const;

// Extract helper functions outside component
const getTeamsFullname = (homeTeam: string, visitingTeam: string): string => {
  const teamsName = `${homeTeam} vs. ${visitingTeam}`;
  return teamsName.length > 36 ? teamsName.slice(0, 36) + "..." : teamsName;
};

const ProgramCard: React.FC<ProgramCardProps> = ({
  id,
  homeTeam,
  visitingTeam,
  venue,
  programImg,
  isLive = false,
  startWatching = false,
  timeLeft,
  isSaved = false,
}) => {
  const [openModal, setOpenModal] = useState(false);

  // Memoize computed values
  const teamsFullname = useMemo(
    () => getTeamsFullname(homeTeam, visitingTeam),
    [homeTeam, visitingTeam]
  );

  // Memoize callbacks
  const handleCardClick = useCallback(() => {
    console.log(id);
  }, [id]);

  const handleOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  // Memoize tag rendering for better performance
  const renderTags = useMemo(() => {
    if (isLive && isSaved) {
      if (startWatching) {
        return (
          <>
            <Tag
              content={timeLeft}
              type="timeLeft"
              sx={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
              }}
            />
            <Tag
              content="REPLAY"
              type="replay"
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
              }}
            />
          </>
        );
      } else {
        return (
          <Tag
            content="LIVE"
            type="live"
            sx={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
            }}
          />
        );
      }
    } else {
      return (
        <>
          <Tag
            content="REPLAY"
            type="replay"
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          />
          <Tag
            content="Tue, Nov 7, 2023 | 5:00 AM"
            type="past"
            sx={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
            }}
          />
        </>
      );
    }
  }, [isLive, isSaved, startWatching, timeLeft]);

  return (
    <Paper elevation={0} sx={programCardStyles.cardContainer} onClick={handleCardClick}>
      <Box sx={imageContainerStyles}>
        <Box
          component="img"
          src={programImg}
          sx={programCardStyles.programImg}
          alt={`${homeTeam} vs ${visitingTeam}`}
        />
        {isLive && (
          <Box 
            component="img" 
            src={playIcon} 
            sx={programCardStyles.playIcon}
            alt="Play"
          />
        )}
        {renderTags}
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={headerStyles}>
          <Typography variant="subtitle1">{venue}</Typography>
          {isSaved && !isLive && (
            <IconButton onClick={handleOpenModal} aria-label="Remove from saved">
              <UnsavedIcon />
            </IconButton>
          )}
        </Box>
        <Typography variant="subtitle2">{teamsFullname}</Typography>
      </Box>
      <CustomModal
        openModal={openModal}
        setOpenModal={handleOpenModal}
        onClose={handleCloseModal}
      >
        <Box sx={modalContentStyles}>
          <DeleteIcon />
        </Box>
        <Typography variant="body1" textAlign="center" color="#0F1014">
          Are you sure you want to delete this game from your Saved games?
        </Typography>
        <Box sx={modalButtonsStyles}>
          <Button
            disableRipple
            onClick={handleCloseModal}
            sx={noButtonStyles}
          >
            No
          </Button>
          <Button
            disableRipple
            sx={yesButtonStyles}
            onClick={handleCloseModal} // Add actual delete logic here
          >
            Yes
          </Button>
        </Box>
      </CustomModal>
    </Paper>
  );
};

export default React.memo(ProgramCard);
