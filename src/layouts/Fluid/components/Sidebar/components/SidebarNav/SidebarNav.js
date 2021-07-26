import React, { useEffect, useState } from "react"

import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import CloseIcon from "@material-ui/icons/Close"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import Link from "@material-ui/core/Link"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import { useTheme } from "@material-ui/core/styles"

const SidebarNav = ({ pages, onClose }) => {
  const theme = useTheme()
  const [activeLink, setActiveLink] = useState("")
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : "")
  }, [])

  return (
    <Box zIndex={10}>
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        onClick={() => onClose()}
      >
        <IconButton>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box paddingX={2} paddingBottom={2}>
        <Box>
          {pages.map((item, i) => (
            <Box key={i} marginBottom={4}>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: 1,
                  display: "block",
                }}
              >
                {item.title}
              </Typography>
              <Grid container spacing={1}>
                {item.pages.map((p, i) => (
                  <Grid item xs={6} key={i}>
                    <Link
                      variant="body2"
                      component={"a"}
                      href={p.href}
                      color={activeLink === p.href ? "primary" : "textPrimary"}
                      sx={{
                        fontWeight: activeLink === p.href ? 600 : 400,
                        "&:hover": {
                          textDecoration: "none",
                          color: theme.palette.primary.dark,
                        },
                      }}
                      onClick={() => onClose()}
                    >
                      {p.title}
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
        <Box>
          <Button
            variant="outlined"
            fullWidth
            component="a"
            href="/docs-introduction"
          >
            Catalogue
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="https://lazuryte.fr"
          >
            Commander
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired,
  onClose: PropTypes.func,
}

export default SidebarNav
