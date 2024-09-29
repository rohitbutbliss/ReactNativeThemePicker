import Themes, {
  ColorModeInterface,
  ColorSchemeInterface,
} from "@/constants/ColorScheme";

const useTheme = (mode: keyof ColorModeInterface): ColorSchemeInterface => {
  return Themes[mode];
};

export default useTheme;
