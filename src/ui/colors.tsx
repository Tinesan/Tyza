export const colors: { [key in COLORS]: string } = {
  silk: "#C1B3A8",
  seashellPeach: "#FFF7F1",
  coffee: "#786354",
  white: "#fff",
  wafer: "#DECCC0",
  thatch: "#B9A698",
  dawnPink: "#F0E9E3",
  black: "#000000",
  gray: "#808080",
  mercury: "#E6E6E6",
};

type COLORS =
  | "gray"
  | "silk"
  | "black"
  | "white"
  | "wafer"
  | "coffee"
  | "thatch"
  | "mercury"
  | "dawnPink"
  | "seashellPeach";
