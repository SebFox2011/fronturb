import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import React from "react"
import Typography from "@material-ui/core/Typography"
import logo from "../../../../turbine_dentaire.png"

const Footer = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Box
          display={"flex"}
          component="a"
          underline="none"
          href="/"
          title="webbee"
          height={24}
          width={35}
        >
          <img
            src={logo}
            style={{ height: "2vmin", pointerEvents: "none" }}
            alt="logo"
          />
        </Box>
        <Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
          <Box marginTop={1} marginRight={2}>
            <Link
              underline="none"
              component="a"
              href="/"
              color="textPrimary"
              variant={"subtitle2"}
            >
              Accueil
            </Link>
          </Box>
          <Box marginTop={1} marginRight={2}>
            <Link
              underline="none"
              component="a"
              href="/docs-introduction"
              color="textPrimary"
              variant={"subtitle2"}
            >
              Catalogue
            </Link>
          </Box>
          <Box marginTop={1}>
            <Button
              variant="outlined"
              color="primary"
              component="a"
              target="blank"
              href="https://lazuryte.fr"
              size="small"
            >
              Commander
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12}>
      <Typography
        align={"center"}
        variant={"subtitle2"}
        color="textSecondary"
        gutterBottom
      >
        &copy; La Turbine. 2021, crée par Lazuryte Agence Web Design. Tous
        droits réservés.
      </Typography>
      <Typography
        align={"center"}
        variant={"caption"}
        color="textSecondary"
        component={"p"}
      >
        Lorsque vous utilisez nos services, vous nous faites confiance pour le
        traitement de vos informations. Nous savons qu'il s'agit d'une lourde
        responsabilité, c'est pourquoi nous nous efforçons de les protéger, tout
        en vous permettant d'en garder le contrôle.
      </Typography>
    </Grid>
  </Grid>
)

export default Footer
