import React from "react";
import RenderCardList from "@components/common/render-list/render-list";
import AppContentWrapper from "@components/common/app-content-wrapper/app-content-wrapper";
import {
  continueWatching,
  savedGames,
  favoriteLeagues,
  favoriteEvents,
  favoriteVenues,
  favoriteTeams,
} from "@/data";
import ProgramCard from "@components/common/cards/program-card/program-card";
import EntityCard from "@components/common/cards/entity-card/entity-card";
import TextInput from "@components/common/inputs/text-input";
import DropdownInput from "@components/common/inputs/drop-down-input";
import { Box } from "@mui/material";

const headerStyles = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: "25px 35px",
  "@media (max-width: 768px)": {
    display: "none",
  },
} as const;

const renderProgramCard = (item: any) => (
  <ProgramCard
    key={item.id}
    id={item.id}
    homeTeam={item.homeTeam}
    visitingTeam={item.visitingTeam}
    venue={item.venue}
    programImg={item.programImg}
    isLive={item.isLive}
    startWatching={item.startWatching}
    timeLeft={item.timeLeft}
    isSaved={item.isSaved}
  />
);

const renderEntityCard = (item: any) => {
  if (item.leagueId) {
    return (
      <EntityCard
        key={item.leagueId}
        id={item.leagueId}
        title={item.name}
        imgLogo={item.leagueLogo}
        hasLivesProgram={item.hasLivesPrograms}
        isPremium={item.isPremium}
      />
    );
  }
  if (item.eventId) {
    return (
      <EntityCard
        key={item.eventId}
        id={item.eventId}
        title={item.name}
        imgLogo={item.eventLogo}
        hasLivesProgram={item.hasLivesPrograms}
        isPremium={item.isPremium}
      />
    );
  }
  if (item.venueId) {
    return (
      <EntityCard
        key={item.venueId}
        id={item.venueId}
        title={item.name}
        imgLogo={item.venueLogo}
        hasLivesProgram={item.hasLivesPrograms}
        isPremium={item.isPremium}
      />
    );
  }
  if (item.teamId) {
    return (
      <EntityCard
        key={item.teamId}
        id={item.teamId}
        title={item.name}
        imgLogo={item.teamLogo}
        hasLivesProgram={item.hasLivesPrograms}
        isPremium={item.isPremium}
      />
    );
  }
  return null;
};

const getProgramKey = (item: any) => `program-${item.id}`;
const getLeagueKey = (item: any) => `league-${item.leagueId}`;
const getEventKey = (item: any) => `event-${item.eventId}`;
const getVenueKey = (item: any) => `venue-${item.venueId}`;
const getTeamKey = (item: any) => `team-${item.teamId}`;

const MyPicks: React.FC = () => {
  return (
    <AppContentWrapper>
      <Box sx={headerStyles}>
        <TextInput />
        <DropdownInput />
      </Box>
      <Box
        sx={{
          "@media (max-width: 768px)": {
            paddingTop: "45px",
          },
        }}
      >

        <RenderCardList
          title="Continue Watching"
          program={continueWatching}
          renderItem={renderProgramCard}
          getItemKey={getProgramKey}
        />

        <RenderCardList
          title="Saved games"
          program={savedGames}
          renderItem={renderProgramCard}
          getItemKey={getProgramKey}
        />

        <RenderCardList
          title="Favorite leagues"
          program={favoriteLeagues}
          renderItem={renderEntityCard}
          getItemKey={getLeagueKey}
        />

        <RenderCardList
          title="Favorite events"
          program={favoriteEvents}
          renderItem={renderEntityCard}
          getItemKey={getEventKey}
        />

        <RenderCardList
          title="Favorite Venues"
          program={favoriteVenues}
          renderItem={renderEntityCard}
          getItemKey={getVenueKey}
        />

        <RenderCardList
          title="Favorite Teams"
          program={favoriteTeams}
          renderItem={renderEntityCard}
          getItemKey={getTeamKey}
        />
      </Box>

    </AppContentWrapper>
  );
};

export default React.memo(MyPicks);
