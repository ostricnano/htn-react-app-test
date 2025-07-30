import { Box, Typography, useMediaQuery, useTheme } from "@mui/material"
import StandardButton from "../buttons/stantad-button"
import image from '@/assets/img/sign-up-banner1.png'
import imageMobiile from '@/assets/img/sign-up-banner-mobile.png'


const SignUpBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'visible',
        background: `
          linear-gradient(#0F101400, #0F1014),
          linear-gradient(90deg, var(--Brand-Color-brand-800, #811B1F) 0%, #D81F27 100%)
        `,
        marginTop: '89px',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -1,
          left: 0,
          right: 0,
          height: '40%',
          background: 'linear-gradient(to top, #0F1014 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 999,
        },
        '@media (max-width: 768px)': {
          flexDirection: 'column',
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          padding: '50px',
          width: '50%', 
          zIndex: 2, 
          '@media (max-width: 768px)': {
            width: '100%',
            padding: '1.5rem',
          }
        }}
      >
        <Typography variant="h1">Sign up to watch premium league content and venue streams.</Typography>
        <Typography variant="subtitle1">
          {
            isMobile ? 
            'Choose the best subscription for you.'
            :
            'Choose how you want to use HomeTeam live with our variety of subscription options.' 
          }
        </Typography>
        <Box>
          <StandardButton label="Sign Up" type="primary" />
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          bottom: 0, // Extend image downward beyond container
          width: '647px',
          zIndex: 1, // Behind the content
          '@media (max-width: 932px)': {
            position: 'static',
            width: '100%',
            marginTop: '-4rem',

          }
        }}
      >
        <img src={isMobile ? imageMobiile : image} alt="Sign up banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
    </Box>
  )
}

export default SignUpBanner