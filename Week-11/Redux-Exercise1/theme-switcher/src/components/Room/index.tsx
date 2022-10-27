import { useTheme } from "app/hooks";

const Room = () => {
  const theme = useTheme();

  return <>{theme === "dark" ? "the room is dark" : "the room is light"}</>;
};

export default Room;
