import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import htnLogo from "@/assets/img/HTNdefault.png";
import htnLogoMobile from "@/assets/img/HTNdefault-mobile.png";
import profileImg from "@/assets/img/profile-img.png";
import SearchBar from "@/components/search-bar/search-bar";
import { navbarStyles } from "./top-nav-bar-styles";
import { Link, useLocation } from "react-router-dom";
import StandardButton from "../buttons/stantad-button";
import { DefaultProfileImg } from "@/icons/default-profile-img";
import { MenuIcon } from "@/icons/menu-icon";
import { useState } from "react";
import { CloseIcon } from "@/icons/close-icon";

const tabs = [
  {
    name: "My picks",
    path: "/my-picks",
  },
  {
    name: "Leagues",
    path: "/leagues",
  },
  {
    name: "Events",
    path: "/events",
  },
  {
    name: "Venues",
    path: "/venues",
  },
];

const TopNavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isLoggedIn = true;
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredTabs = tabs.filter(
    (tab) => tab.name !== "My picks" || isLoggedIn
  );

  const isTabActive = (tabPath: string, currentPath: string) => {
    if (tabPath === currentPath) return true;

    if (tabPath !== "/" && currentPath.startsWith(tabPath)) return true;

    return false;
  };

  return (
    <>
      <Box sx={navbarStyles.navBar}>
        <Box
          sx={navbarStyles.menuIcon}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon />
        </Box>
        <Box sx={navbarStyles.leftContainer}>
          <Box sx={navbarStyles.logoWrapper}>
            <Box
              sx={navbarStyles.logo}
              component="img"
              src={isMobile ? htnLogoMobile : htnLogo}
              alt="HTN Logo"
            />
          </Box>
        </Box>
        <SearchBar placeHolder="Search what you want to watch" />
        <Box sx={navbarStyles.rightContainer}>
          <Box sx={navbarStyles.tabs}>
            {filteredTabs.map((tab) => {
              const isActive = isTabActive(tab.path, location.pathname);
              return (
                <Box
                  component="li"
                  key={tab.name}
                  className={isActive ? 'active' : ''}
                  sx={navbarStyles.tabItem}
                >
                  <Link to={tab.path}>
                    <Typography variant="body2">{tab.name}</Typography>
                  </Link>
                </Box>
              );
            })}
          </Box>
          {!isLoggedIn ? (
            <Box sx={navbarStyles.buttonContainer}>
              <StandardButton type='primary' label='Sign In' />
              <StandardButton type='secondary' label='Sign Up' />
            </Box>
          ) : (
            <Box sx={navbarStyles.profileImgWrapper}>
              {profileImg ? (
                <Box
                  component="img"
                  sx={navbarStyles.profileImg}
                  src={profileImg}
                  alt="Profile image"
                />
              ) : (
                <DefaultProfileImg />
              )}
            </Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(0, 0, 0)",
          position: "fixed",
          top: 0,
          left: 0,
          transform: isMenuOpen ? "translateY(0)" : "translateY(-100vh)",
          transition: "transform 850ms ease-in-out",
          zIndex: 1000,
          overflow: "hidden",
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Box sx={navbarStyles.logoWrapper}>
            <Box
              sx={navbarStyles.logo}
              component="img"
              src={htnLogoMobile}
              alt="HTN Logo"
            />
          </Box>
          <Box onClick={() => setIsMenuOpen(false)}>
            <CloseIcon stroke="white" />
          </Box>
        </Box>
        {
          filteredTabs.map((tab) => {
            return (
              <Box key={tab.name}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px 12px",
                  gap: "10px",
                  cursor: "pointer",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to={tab.path}>
                  <Typography variant="body2">{tab.name}</Typography>
                </Link>
              </Box>
            )
          })
        }
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          width: "100%",
        }}>
          <StandardButton type='primary' label='Sign In' />
          <StandardButton type='secondary' label='Sign Up' />
        </Box>
      </Box>
    </>
  );
};

export default TopNavBar;
