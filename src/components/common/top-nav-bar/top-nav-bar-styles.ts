import { theme } from '@/theme/theme-config';

export const navbarStyles = {
  navBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '75px',
    backgroundColor: theme.palette.primary.dark,
    padding: '14px 60px',
    '@media (max-width: 932px)': {
      padding: '14px 20px',
      justifyContent: 'space-between',
    }
  },

  leftContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '50px',
  },

  logoWrapper: {
    width: '182px',
    height: '32px',
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  rightContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',

  },

  tabs: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    '@media (max-width: 932px)': {
      display: "none",
    }
  },

  tabItem: {
    position: 'relative',
    listStyle: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: '-5px',
      width: 0,
      height: '2px',
      backgroundColor: '#fff',
      transition: 'width 0.5s ease',
    },
    '&:hover::after': {
      width: '100%',
    },
    '&.active::after': {
      width: '100%',
    },
  },

  buttonContainer: {
    display: 'flex',
    gap: '1rem',
    '@media (max-width: 932px)': {
      display: "none",
    }
  },

  profileImgWrapper: {
    width: '33px',
    height: '33px',
    borderRadius: '50%',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  profileImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  menuIcon: {
    display: 'none',
    '@media (max-width: 932px)': {
      display: 'block',
    }
  }
};


