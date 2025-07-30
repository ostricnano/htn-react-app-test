import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountLayout from "@layout/account-layout/account-layout";
import Profile from "@pages/account/profile/profile";
import MyPicks from "@pages/my-picks/my-picks-landings";
import MainLayout from "@layout/main-layout/main-layout";
import Events from "@pages/events/events-landing";
import Venues from "@pages/venues/venues-landing";
import { lazy, Suspense } from "react";

const Leagues = lazy(() => import("@pages/leagues/leagues-landing"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/account" element={<AccountLayout />}>
          <Route path="/account/profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="/my-picks" element={<MyPicks />} />

          <Route 
            path="/leagues" 
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Leagues />
              </Suspense>
            } 
          />
          <Route path="leagues/:id" element={<Leagues />} />
          <Route path="/events" element={<Events />} />
          <Route path="/venues" element={<Venues />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
