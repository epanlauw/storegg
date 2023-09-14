type GameItemThumbnail =
  | "Thumbnail-1"
  | "Thumbnail-2"
  | "Thumbnail-3"
  | "Thumbnail-4"
  | "Thumbnail-5";

interface GameItemProps {
  title: string;
  category: string;
  thumbnail: GameItemThumbnail;
}

const GameItem: GameItemProps[] = [
  {
    title: "Super Mechs",
    category: "Mobile",
    thumbnail: "Thumbnail-1"
  },
  {
    title: "Call of Duty: Modern",
    category: "Mobile",
    thumbnail: "Thumbnail-2"
  },
  {
    title: "Mobile Legends",
    category: "Mobile",
    thumbnail: "Thumbnail-3"
  },
  {
    title: "Clash of Clans",
    category: "Mobile",
    thumbnail: "Thumbnail-4"
  },
  {
    title: "Valorant",
    category: "Desktop",
    thumbnail: "Thumbnail-5"
  }
];

export default GameItem;
