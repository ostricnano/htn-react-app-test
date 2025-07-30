export const footerStyles = {
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 60px 26px 60px",
    backgroundColor: "#D81F27",
    width: "100%",
    '@media (max-width: 932px)': {
      padding: "0.75rem 1.5rem",
    }
  },
  leftContainer: {
    display: "flex",
    alignItems: "center",
    '@media (max-width: 932px)': {
      flexDirection: "column",
      alignItems: "flex-start",
    }
  },
  logoWrapper: {
    width: "125px",
    height: "22px",
    '@media (max-width: 932px)': {
      display: "none",
    }
  },
  logo: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },
  linksWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "3rem",
    margin: "0 2rem",
    '@media (max-width: 932px)': {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 0,
      margin: "0",
    }
  },
  text: {
    fontSize: "12px",
    color: "#fff",
    margin: 0,
    padding: 0,
    '@media (max-width: 932px)': {
      fontSize: "0.625rem",
    }
  },
  rightContainer: {
    display: "flex", 
    justifyContent: "center", 
    gap: 2,
    '@media (max-width: 932px)': {
      gap: ".19rem",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "0.25rem",
    }
  },
  socialMediaWrapper: {
    display: "flex", 
    padding: 0 
  },
  socialItem: {
    width: "auto", 
    padding: 0,
    '@media (max-width: 932px)': {
      width: "0.84375rem",
      height: "0.84375rem",
      padding: '15px',
    }
  }
};
