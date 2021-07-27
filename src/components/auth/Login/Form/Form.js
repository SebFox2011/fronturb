import * as yup from "yup"

import React, { useState } from "react"

import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import { Checkbox } from "@material-ui/core"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import Grid from "@material-ui/core/Grid"
import { Link } from "react-router-dom"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { useFormik } from "formik"

const validationSchema = yup.object({
  email: yup
    .string("Entrez votre e-mail")
    .trim()
    .email("Merci d'entrer une adresse e-mail valide !")
    .required("Le champ e-mail est requis"),
  password: yup
    .string()
    .required("Merci de préciser votre mot de passe")
    .min(
      8,
      "Le mot de passe devrait avoir une longueur minimale de 8 caractères."
    ),
})

const Form = () => {
  const [seePassword, setSeePassword] = useState(false)
  const [openSession, setOpenSession] = useState(false)
  const initialValues = {
    email: "",
    password: "",
  }

  const onSubmit = (values) => {
    if (values.email === "seb@mail.com" && values.password === "00000000") {
      localStorage.setItem("isLogged", true)
      console.log("logged")
    }
    else
    localStorage.setItem("isLogged", false)
    return values
  }

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  })

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          Connexion
        </Typography>
        <Typography color="text.secondary">
          Connectez-vous pour accéder à votre compte.
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "center" }}
              justifyContent={"space-between"}
              width={"100%"}
              marginBottom={2}
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant={"subtitle2"}>
                  Entrez votre e-mail
                </Typography>
              </Box>
            </Box>
            <TextField
              label="Email *"
              variant="outlined"
              name={"email"}
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "center" }}
              justifyContent={"space-between"}
              width={"100%"}
              marginBottom={2}
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant={"subtitle2"}>
                  Entrez votre mot de passe
                </Typography>
              </Box>
              <Typography variant={"subtitle2"}>
                <Link
                  component={"a"}
                  color={"primary"}
                  href={"/page-forgot-password"}
                  underline={"none"}
                >
                  Mot de passe oublié ?
                </Link>
              </Typography>
            </Box>
            <TextField
              label="Password *"
              variant="outlined"
              name={"password"}
              type={seePassword ? "text" : "password"}
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item container xs={12}>
            <Box
              display="flex"
              justifyContent={"space-between"}
              width={"100%"}
              maxWidth={600}
              margin={"0 auto"}
            >
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={seePassword}
                        onChange={() =>
                          setSeePassword((seePassword) => !seePassword)
                        }
                        name="voir-mot-de-passe"
                      />
                    }
                    label="Voir le mot de passe"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={openSession}
                        onChange={() =>
                          setOpenSession((openSession) => !openSession)
                        }
                        name="maintenir-la-session"
                      />
                    }
                    label="Maintenir la session ouverte"
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </Grid>
          <Grid item container xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "center" }}
              justifyContent={"space-between"}
              width={"100%"}
              maxWidth={600}
              margin={"0 auto"}
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant={"subtitle2"}>
                  Pas encore de compte?{" "}
                  <Link
                    component={"a"}
                    color={"primary"}
                    href={"/page-signup"}
                    underline={"none"}
                  >
                    Enregistrez-vous ici.
                  </Link>
                </Typography>
              </Box>
              <Button size={"large"} variant={"contained"} type={"submit"}>
                Se connecter
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default Form
