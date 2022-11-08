import { changeTheme } from "redux/theme/themeActions";
import { useAppDispatch } from "app/hooks";

const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(changeTheme())}>flip</button>;
};

export default ThemeSwitcher;
