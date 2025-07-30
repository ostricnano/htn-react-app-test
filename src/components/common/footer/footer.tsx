import htnLogo from "@/assets/img/HTNdefault.png";
import youtube from "@/assets/icons/Youtube-icon.png";
import instagram from "@/assets/icons/Instagram-icon.png";
import linkedin from "@/assets/icons/LinkedIn-icon.png";
import facebook from "@/assets/icons/Facebook-icon.png";
import tiktok from "@/assets/icons/TikTok-icon.png";
import x from "@/assets/icons/X-icon.png";
import { Box, IconButton, List, ListItem, Typography } from "@mui/material";
import { footerStyles } from "./footer-styles";

const socialMediaLinks = [
  { icon: x, label: "X (Twitter)" },
  { icon: youtube, label: "YouTube", url: youtube },
  { icon: instagram, label: "Instagram", url: instagram },
  { icon: linkedin, label: "LinkedIn", url: linkedin },
  { icon: facebook, label: "Facebook", url: facebook },
  { icon: tiktok, label: "TikTok", url: tiktok },
];
const footerLinks = ["Terms Of Use", "Privacy-Policy", "Help", "FAQ"];

const Footer = () => {
  return (
    <Box sx={footerStyles.mainContainer}>
      <Box sx={footerStyles.leftContainer}>
        <Box sx={footerStyles.logoWrapper}>
          <Box
            component="img"
            src={htnLogo}
            alt="Hack the North Logo"
            sx={footerStyles.logo}
          />
        </Box>
        <Box sx={footerStyles.linksWrapper}>
          {footerLinks.map((link, index) => (
            <Typography key={index} variant="subtitle1"
            >
              {link}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box sx={footerStyles.rightContainer}>
        <List sx={footerStyles.socialMediaWrapper}>
          {socialMediaLinks.map(({ icon, label, url }) => (
            <ListItem key={label} sx={footerStyles.socialItem}>
              <IconButton
                component="a"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <img src={icon} alt={label} style={{ width: 24, height: 24 }} />
              </IconButton>
            </ListItem>
          ))}
        </List>
        <Typography sx={footerStyles.text}>© 2025 HomeTeam Live</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
