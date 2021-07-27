import Box from "@material-ui/core/Box"
import Container from "../../common/Container"
import React from "react"
import Search from "./Components/Search"

const Home = () => {

  return (
    <Box
      position={"relative"}
      minHeight={"calc(100vh - 247px)"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100%"}
    >
      <Container maxWidth={600}>
        <Search />
      </Container>
    </Box>
  )
}

export default Home
