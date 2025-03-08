import { Asset } from "contentful-management";

type Day =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24";

export interface CalendarEntry {
  day: Day;
  text?: string;
  image: string;
}

export interface Calendar {
  identifier: string;
  welcomeMessage?: string;
  appearance?: "lebkuchenhaus" | "tiles" | undefined;
  entries: CalendarEntry[];
}
