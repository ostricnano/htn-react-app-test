export type ButtonType = 'primary' | 'secondary' | 'danger';

export type FormFieldType =
  | "input"
  | "textarea"
  | "checkbox"
  | "phoneInput"
  | "datePicker"
  | "select"
  | "skeleton";

export type SavedGame = {
  id: number;
  homeTeam: string;
  visitingTeam: string;
  venue: string;
  isLive: boolean;
  timeLeft: string;
}

export type ContinueWatching = {
  id: number;
  homeTeam: string;
  visitingTeam: string;
  venue: string;
  isLive: boolean;
  timeLeft: string;
  programImg: string;
  isSaved: boolean;
  startWatching: boolean;
}