import { Box, Typography } from "@mui/material";
import Tag from "@components/common/tags/tag";

interface EntityCardProps {
  id: number;
  title: string;
  imgLogo: string;
  hasLivesProgram?: boolean;
  isPremium: boolean;
}

const EntityCard: React.FC<EntityCardProps> = ({
  id,
  title,
  imgLogo,
  hasLivesProgram,
  isPremium,
}) => {
  const getTitle = () => {
    if (title.length > 43) {
      return title.slice(0, 43) + "...";
    }
    return title;
  };
  return (
    <Box
      sx={{
        width: "126px",
        height: "auto",
        cursor: "pointer"
      }}
      onClick={() => {
        console.log(id);
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "126px",
          height: "126px",
          border: hasLivesProgram ? "4px solid #D81F27" : "none",
          borderRadius: "50%",
          backgroundColor: "primary.light",
          marginBottom: "16px",
        }}
      >
        {imgLogo ? (
          <Box
            component="img"
            src={imgLogo}
            sx={{
              width: "90px",
              height: "90px",
              objectFit: "contain",
            }}
          />
        ) : (
          <Typography variant="subtitle2">DF</Typography>
        )}
        {hasLivesProgram && (
          <Tag
            type="live"
            content="LIVE"
            showIcon={false}
            sx={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        )}
        {hasLivesProgram && isPremium && (
          <Tag
            type="livePremium"
            content="LIVE"
            showIcon={true}
            sx={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        )}
        {isPremium && !hasLivesProgram && (
          <Tag
            type="premium"
            sx={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        )}
      </Box>
      <Typography variant="subtitle2" textAlign="center">
        {getTitle()}
      </Typography>
    </Box>
  );
};

export default EntityCard;
