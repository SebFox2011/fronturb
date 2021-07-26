import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import Grid from "@material-ui/core/Grid"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import React from "react"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"

const Dentiste = ({ formik }) => {
  const [radioValue, setRadioValue] = React.useState("dentiste")

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value)
  }
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
          Entrez votre nom de famille - Dentiste
        </Typography>
        <TextField
          label="Nom de famille *"
          variant="outlined"
          name={"firstName"}
          fullWidth
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
          Entrez votre prénom
        </Typography>
        <TextField
          label="Prénom *"
          variant="outlined"
          name={"lastName"}
          fullWidth
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
          Adresse du cabinet
        </Typography>
        <TextField
          label="Adresse"
          variant="outlined"
          name={"address"}
          fullWidth
          value={formik.values.address}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
          Ville
        </Typography>
        <TextField
          label="Ville"
          variant="outlined"
          name={"city"}
          fullWidth
          value={formik.values.city}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
          Code postal
        </Typography>
        <TextField
          label="Code postal"
          variant="outlined"
          name={"cp"}
          fullWidth
          value={formik.values.cp}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          value="adresseLivraison"
          control={<Radio />}
          label="Adresse de livraison identique à celle de facturation ?"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
          Entrez votre e-mail
        </Typography>
        <TextField
          label="E-mail *"
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
        <FormGroup>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={radioValue}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="dentiste"
              control={<Radio />}
              label="Accéder à l'identification bancaire sécurisée"
            />
            <FormControlLabel
              value="fournisseur"
              control={<Radio />}
              label="Rapporter lors de mes premières commandes"
            />
          </RadioGroup>
        </FormGroup>
      </Grid>
      <Grid item xs={12}>
        <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
          Codes d'abonnements
        </Typography>
        <TextField
          label="Code d'abonnement 1"
          variant="outlined"
          name={"code1"}
          type={"texte"}
          fullWidth
          value={formik.values.code1}
          onChange={formik.handleChange}
        />
        <TextField
          label="Code d'abonnement 2"
          variant="outlined"
          name={"code2"}
          type={"texte"}
          fullWidth
          value={formik.values.code2}
          onChange={formik.handleChange}
        />
      </Grid>
    </>
  )
}

export default Dentiste
