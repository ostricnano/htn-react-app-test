import { useEffect, useState } from "react";
import { continueWatchingService } from "@/services/my-picks-service";
import type { ContinueWatching } from "@/types/types";

export const useContinueWatchingGames = () => {
  const [continueWatchingGames, setContinueWatchingGames] = useState<ContinueWatching[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    continueWatchingService.getItems().then((data) => {
      setContinueWatchingGames(data);
      setLoading(false);
    });
  }, []);
  if (!continueWatchingGames) {
    throw new Promise(() => {});
  }

  return { continueWatchingGames, loading };
};