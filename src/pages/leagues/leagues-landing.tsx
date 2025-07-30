import AppContentWrapper from "@/components/common/app-content-wrapper/app-content-wrapper"
import FeaturedSlider from "@/components/common/featured-list/featured-slider"
import DropdownInput from "@/components/common/inputs/drop-down-input"
import TextInput from "@/components/common/inputs/text-input"
import SignUpBanner from "@/components/common/sign-up-banner/sign-up-banner"
import { Box } from "@mui/material"
import {
  favoriteLeagues,
} from "@/data";

// Import featured images
import image01 from '@/assets/img/featured/featured01.png'
import image02 from '@/assets/img/featured/featured02.png'
import image03 from '@/assets/img/featured/featured03.png'
import image04 from '@/assets/img/featured/featured04.png'
import FeaturedCard from "@/components/common/cards/featured-card/featured-card"
import EntityCard from "@/components/common/cards/entity-card/entity-card"

const headerStyles = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: "0 35px",
  "@media (max-width: 768px)": {
    display: "none",
  },
} as const;

// Featured leagues data
const featuredLeagues = [
  {
    id: 1,
    image: image01,
  },
  {
    id: 2,
    image: image02,
  },
  {
    id: 3,
    image: image03,
  },
  {
    id: 4,
    image: image04,
  },
  {
    id: 5,
    image: image01,
  }
];

const Leagues = () => {
  return (
    <AppContentWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3.12rem",
          padding: "3.12rem 0",
        }}
      >

      <FeaturedSlider
        title="Featured Leagues"
        items={featuredLeagues}
        renderCard={(item) => (
          <FeaturedCard image={item.image} id={item.id} />
        )}
        getItemKey={(item) => item.id}
        scrollAmount={320}
      />
      <SignUpBanner />
      <Box sx={headerStyles}>
        <TextInput />
        <DropdownInput />
      </Box>
      <FeaturedSlider
        title="American Futbol"
        items={favoriteLeagues}
        renderCard={(item) => (
          <EntityCard
            id={item.leagueId}
            title={item.name}
            imgLogo={item.leagueLogo}
            hasLivesProgram={item.hasLivesPrograms}
            isPremium={item.isPremium}
          />
        )}
        getItemKey={(item) => item.leagueId}
        scrollAmount={820}
      />
      <FeaturedSlider
        title="Baseball"
        items={favoriteLeagues}
        renderCard={(item) => (
          <EntityCard
            id={item.leagueId}
            title={item.name}
            imgLogo={item.leagueLogo}
            hasLivesProgram={item.hasLivesPrograms}
            isPremium={item.isPremium}
          />
        )}
        getItemKey={(item) => item.leagueId}
        scrollAmount={820}
      />
      </Box>
    </AppContentWrapper>
  )
}

export default Leagues