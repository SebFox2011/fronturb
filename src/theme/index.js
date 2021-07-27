import { createTheme } from "@material-ui/core/styles"
import palette from "./palette"
import { responsiveFontSizes } from "@material-ui/core"
import shadows from "./shadows"

const getTheme = (mode, paletteType) =>
  responsiveFontSizes(
    createTheme({
      palette: palette(mode, paletteType),
      layout: {
        contentWidth: 1236,
      },
      shadows: shadows(mode),
      typography: {
        fontFamily: '"Inter", sans-serif',
        button: {
          textTransform: "none",
          fontWeight: "medium",
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1100,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            label: {
              fontWeight: 600,
            },
            containedSecondary: mode === "light" ? { color: "white" } : {},
          },
        },
      },
    })
  )

export default getTheme
