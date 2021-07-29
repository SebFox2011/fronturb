import { useDispatch, useSelector } from "react-redux"

import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Link from "@material-ui/core/Link"
import MenuIcon from "@material-ui/icons/Menu"
import PropTypes from "prop-types"
import React from "react"
import { colors } from "@material-ui/core"
import { logOut } from "../../../../reducers/currentUser"
import logo from "../../../../turbine_dentaire.png"
import paletteTypes from "../../../../common/paletteTypes"
import { useTheme } from "@material-ui/core/styles"

const Topbar = ({
  themeMode,
  themeToggler,
  setThemePalette,
  onSidebarOpen,
  paletteType,
}) => {
  const user = useSelector((state) => state.currentUser.email)
  const dispatch = useDispatch()
  const theme = useTheme()

  const handleDeconnexion = (event) => {
    event.preventDefault()
    dispatch(logOut())
  }
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Box marginRight={{ xs: 1, sm: 2 }}>
          <IconButton onClick={onSidebarOpen} aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Box>
        <Box
          display={"flex"}
          alignItems="center"
          component="a"
          underline="none"
          href="/"
          title="La Turbine"
          width={45}
        >
          <img
            src={logo}
            style={{ height: "2vmin", pointerEvents: "none" }}
            alt="logo"
          />
        </Box>
      </Box>
      <Box display="flex" alignItems={"center"}>
        <Box
          display={"flex"}
          padding={1}
          borderRadius={8}
          bgcolor={theme.palette.alternate.main}
        >
          {paletteTypes.map((item, i) => (
            <Box
              key={item}
              bgcolor={colors[item][700]}
              width={20}
              height={20}
              borderRadius={"100%"}
              marginRight={i === paletteTypes.length - 1 ? 0 : 1}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
              onClick={() => setThemePalette(item)}
            >
              {paletteType === item && (
                <svg
                  width={12}
                  height={12}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </Box>
          ))}
        </Box>
        <Box>
          <IconButton
            onClick={() => themeToggler()}
            aria-label="Dark mode toggler"
            color={themeMode === "light" ? "primary" : "secondary"}
          >
            {themeMode === "light" ? (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
          <Box>
            <Link underline="none" component="a" href="/" color="textPrimary">
              Accueil
            </Link>
          </Box>
          <Box marginX={2}>
            <Link
              underline="none"
              component="a"
              href="/docs-introduction"
              color="textPrimary"
            >
              Catalogue
            </Link>
          </Box>
          <Box marginX={2}>
            <Button
              variant="outlined"
              color="primary"
              //component="a"
              target="blank"
              href="/"
              size="large"
              onClick={handleDeconnexion}
            >
              Déconnexion
            </Button>
          </Box>
          <Box marginX={2}>
            <Button
              variant="contained"
              color="primary"
              component="a"
              target="blank"
              href="https://lazuryte.fr"
              size="large"
            >
              Commander
            </Button>
          </Box>
          {user && (
            <Box marginX={2}>
              <Avatar alt={user}>{user.charAt(0).toUpperCase()}</Avatar>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
  setThemePalette: PropTypes.func.isRequired,
  paletteType: PropTypes.string.isRequired,
}

export default Topbar
