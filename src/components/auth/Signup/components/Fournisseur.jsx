import Grid from "@material-ui/core/Grid"
import React from "react"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"

const Fournisseur = ({formik})=>{

    return <>
    <Grid item xs={12} sm={6}>
      <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
        Entrez votre nom de famille - Fournisseur
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
      <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
        Entrez votre mot de passe
      </Typography>
      <TextField
        label="Mot de passe *"
        variant="outlined"
        name={"password"}
        type={"password"}
        fullWidth
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
    </Grid>
  </>
}

export default Fournisseur