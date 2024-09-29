interface ColorSchemeInterface {
  text: string;
  background: string;
  tint: string;
  tintSelected: string;
}

interface ColorModeInterface {
  dark: ColorSchemeInterface;
  light: ColorSchemeInterface;
}

const Themes: ColorModeInterface = {
  dark: {
    background: "#101011",
    text: "#fff",
    tint: "#2d2d2d",
    tintSelected: "#ffffff50",
  },
  light: {
    background: "#fff",
    text: "#101011",
    tint: "#e8e8e8",
    tintSelected: "#00000080",
  },
};

export { ColorSchemeInterface, ColorModeInterface };
export default Themes;
