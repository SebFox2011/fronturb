import React, { useState } from "react"

import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Container from "../../../common/Container"
import DeleteForeverIcon from "@material-ui/icons/DeleteForever"
import IconButton from "@material-ui/core/IconButton"
import InputAdornment from "@material-ui/core/InputAdornment"
import OutlinedInput from "@material-ui/core/OutlinedInput"

const produits = [
  {
    id: 1,
    nom: "tetric evont ccran cavifill ",
    prix: "10,40",
    categorie: "Restauratrice",
  },
  {
    id: 2,
    nom: "favifill tetric evo ccran ",
    prix: "0,40",
    categorie: "Endodontie",
  },
  {
    id: 3,
    nom: "tevo tetric ccran cavifill ",
    prix: "8,40",
    categorie: "Fraise",
  },
  {
    id: 4,
    nom: "tetric evo cran cavifill ",
    prix: "9,40",
    categorie: "Prothèse",
  },
  {
    id: 5,
    nom: "tetric evo ccran cavifill ",
    prix: "5,40",
    categorie: "Restauratrice",
  },
  {
    id: 6,
    nom: "tetric evo ccran cavifill ",
    prix: "6,40",
    categorie: "Stérilisation",
  },
  {
    id: 7,
    nom: "tetric evo ccran cavifill ",
    prix: "7,40",
    categorie: "Divers",
  },
  {
    id: 8,
    nom: "tetric evo ccran cavifill ",
    prix: "10,40",
    categorie: "Restauratrice",
  },
]

const Search = () => {
  const [search, setSearch] = useState("")

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }
  const BarStyling = {
    width: "40rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  }
  return (
    <Box
      position={"relative"}
      minHeight={"calc(100vh - 247px)"}
      display={"flex"}
      alignItems={"flex-start"}
      justifyContent={"center"}
      height={"100%"}
    >
      <Container maxWidth={600}>
        <h1>Recherche</h1>
        <OutlinedInput
          id="outlined-adornment-password"
          style={{ width: "450px" }}
          type={"text"}
          value={search}
          onChange={handleSearchChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="delete-search"
                onClick={() => {
                  setSearch("")
                }}
                edge="end"
              >
                <DeleteForeverIcon />
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
        {search.length > 0 &&
          produits
            .filter((item) => item.nom.includes(search))
            .map((item) => <p>{item.nom}</p>)}
      </Container>
    </Box>
  )
}

export default Search
