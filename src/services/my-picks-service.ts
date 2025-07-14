import { savedGames, continueWatching } from "@/data";

export const getSavedGamesService = {
  getItems: (): Promise<typeof savedGames> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(savedGames);
      }, 10000);
    });
  }
};

export const continueWatchingService = {
  getItems: (): Promise<typeof continueWatching> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(continueWatching);
      }, 10000);
    });
  }
};