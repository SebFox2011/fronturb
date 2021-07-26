import * as yup from "yup"

import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Dentiste from "../Dentiste"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import Fournisseur from "../Fournisseur"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import React from "react"
import Typography from "@material-ui/core/Typography"
import { useFormik } from "formik"

const validationSchemaDentiste = yup.object({
  firstName: yup
    .string("Entrez le nom de famille")
    .trim()
    .min(2, "Merci d'entrer un nom valide avec au moins 2 caractères")
    .max(50, "Merci d'entrer un nom valide avec maximum 50 caractères")
    .required("Merci de renseigner votre nom de famille"),
  lastName: yup
    .string("Entrez le prénom")
    .trim()
    .min(2, "Merci d'entrer un prénom valide avec au moins 2 caractères")
    .max(50, "Merci d'entrer un prénom valide avec maximum 50 caractères")
    .required("Merci de renseigner votre prénom"),
  email: yup
    .string("Entrez votre e-mail")
    .trim()
    .email("Merci d'entrer une adresse e-mail valide")
    .required("Le champ e-mail est requis"),
  address: yup.string(),
  city: yup.string(),
  cp: yup.string(),
  code1: yup.string(),
  code2: yup.string(),
})

const validationSchemaFournisseur = yup.object({
  firstName: yup
    .string("Entrez le nom de famille")
    .trim()
    .min(2, "Merci d'entrer un nom valide avec au moins 2 caractères")
    .max(50, "Merci d'entrer un nom valide avec maximum 50 caractères")
    .required("Merci de renseigner votre nom de famille"),
  lastName: yup
    .string("Entrez le prénom")
    .trim()
    .min(2, "Merci d'entrer un prénom valide avec au moins 2 caractères")
    .max(50, "Merci d'entrer un prénom valide avec maximum 50 caractères")
    .required("Merci de renseigner votre prénom"),
  email: yup
    .string("Entrez votre e-mail")
    .trim()
    .email("Merci d'entrer une adresse e-mail valide")
    .required("Le champ e-mail est requis"),
  password: yup
    .string()
    .required("Merci de renseigner votre mot de passe")
    .min(8, "Le mot de passe doit avoir une longueur minimale de 8 caractères"),
})

const Form = () => {
  const [radioValue, setRadioValue] = React.useState("dentiste")
  const initialFournisseurValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    cp: "",
    code1: "",
    code2: "",
  }

  const initialDentisteValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    cp: "",
    code1: "",
    code2: "",
  }

  const onSubmit = (values,{resetForm}) => {
    console.log(values)
    //resetForm()
    return values
  }

  const formik = useFormik({
    initialValues:
      radioValue === "dentiste"
        ? initialDentisteValues
        : initialFournisseurValues,
    validationSchema:
      radioValue === "dentiste"
        ? validationSchemaDentiste
        : validationSchemaFournisseur,
    onSubmit,
  })

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value)
  }

  return (
    <Box padding={0}>
      <Box marginBottom={2}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"textSecondary"}
        >
          Création de votre compte
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          Création d'un nouveau compte
        </Typography>
        <Typography color="text.secondary">
          Merci de renseigner tous les champs afin de pouvoir vous identifier
          par la suite.
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={12}>
            <FormControl component="fieldset">
              <FormGroup>
                <RadioGroup
                  aria-label="dentiste-fournisseur"
                  name="dentiste-fournisseur"
                  value={radioValue}
                  onChange={handleRadioChange}
                  row
                >
                  <FormControlLabel
                    value="dentiste"
                    control={<Radio />}
                    label="Dentiste"
                  />
                  <FormControlLabel
                    value="fournisseur"
                    control={<Radio />}
                    label="Fournisseur"
                  />
                </RadioGroup>
              </FormGroup>
            </FormControl>
          </Grid>
          {radioValue === "dentiste" ? (
            <Dentiste formik={formik} />
          ) : (
            <Fournisseur formik={formik} />
          )}
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
                  Vous possédez déjà un compte ?{" "}
                  <Link
                    component={"a"}
                    color={"primary"}
                    href={"/page-login"}
                    underline={"none"}
                  >
                    Connexion
                  </Link>
                </Typography>
              </Box>
              <Button size={"large"} variant={"contained"} type={"submit"}>
                S'enregistrer
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              variant={"subtitle2"}
              color={"textSecondary"}
              align={"center"}
            >
              En cliquant sur s'enregistrer vous attestez être d'accord avec
              notre{" "}
              <Link
                component={"a"}
                color={"primary"}
                href={"/page-privacy"}
                underline={"none"}
              >
                politique sur les données personnelles.
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default Form
