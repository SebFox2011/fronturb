import Box from "@material-ui/core/Box"
import Drawer from "@material-ui/core/Drawer"
import PropTypes from "prop-types"
import React from "react"
import { SidebarNavClient } from "./components"

const SidebarClient = ({ pages, open, variant, onClose, ...rest }) => {
  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: { xs: "100%", sm: 400 },
        },
      }}
    >
      <Box
        {...rest}
        sx={{
          height: "100%",
          padding: 1,
        }}
      >
        <SidebarNavClient pages={pages} onClose={onClose} />
      </Box>
    </Drawer>
  )
}

SidebarClient.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  pages: PropTypes.array.isRequired,
}

export default SidebarClient
