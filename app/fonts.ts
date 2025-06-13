import {
  Cormorant_SC,
  Cormorant_Upright,
  IBM_Plex_Serif,
  Parisienne,
  UnifrakturMaguntia,
} from "next/font/google";

export const caligraphy = Cormorant_SC({
  subsets: ["latin"],
  weight: "600",
});

export const sans = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: "400",
});
