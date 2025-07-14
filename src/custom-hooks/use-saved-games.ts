import { useEffect, useState } from "react";
import { getSavedGamesService } from "@/services/my-picks-service";
import type { SavedGame } from "@/types/types";

export const useSavedGames = () => {
  const [savedGames, setSavedGames] = useState<SavedGame[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSavedGamesService.getItems().then((data) => {
      setSavedGames(data);
      setLoading(false);
    });
  }, []);
  if (!savedGames) {
    throw new Promise(() => {});
  }

  return { savedGames, loading };
};