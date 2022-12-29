import type { AppDispatch, RootState } from "./store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { selectTheme } from "redux/theme/themeSelectors";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTheme = () => {
  const { value } = useAppSelector(selectTheme);
  return value;
};
