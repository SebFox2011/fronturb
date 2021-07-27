import Box from "@material-ui/core/Box"
import Drawer from "@material-ui/core/Drawer"
import PropTypes from "prop-types"
import React from "react"
import { SidebarNav } from "./components"

const Sidebar = ({ pages, open, variant, onClose, ...rest }) => {
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
        <SidebarNav pages={pages} onClose={onClose} />
      </Box>
    </Drawer>
  )
}

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  pages: PropTypes.array.isRequired,
}

export default Sidebar
