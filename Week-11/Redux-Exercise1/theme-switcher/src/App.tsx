import "App.css";

import Room from "components/Room";
import ThemeSwitcher from "components/ThemeSwitcher";
import { useTheme } from "app/hooks";

function App() {
  const theme = useTheme();
  const lightedness = theme === "dark" ? "dark" : "light";

  return (
    <div className={`room ${lightedness}`}>
      <Room />
      <br />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
