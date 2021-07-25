import * as yup from "yup"

import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import React from "react"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { useFormik } from "formik"

const validationSchema = yup.object({
  email: yup
    .string("Entrez votre e-mail")
    .trim()
    .email("Merci de renseigner une adresse e-mail valide")
    .required("Le champ e-mail est requis"),
})

const Form = () => {
  const initialValues = {
    email: "",
  }

  const onSubmit = (values) => {
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
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"textSecondary"}
        >
          Retrouver son mot de passe
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          Vous avez oublié votre mot de passe ?
        </Typography>
        <Typography color="text.secondary">
          Entrez votre adresse e-mail ci-dessous et nous renverrons un lien de
          réinitialisation de votre mot de passe.
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
              Entrez votre e-mail
            </Typography>
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
                <Button
                  size={"large"}
                  variant={"outlined"}
                  component={Link}
                  href={"/page-login"}
                >
                  Retour au formulaire de login
                </Button>
              </Box>
              <Button size={"large"} variant={"contained"} type={"submit"}>
                Envoi du lien de reset mot de passe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default Form
