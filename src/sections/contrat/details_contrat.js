// details.js
import React from 'react';
import { Button, Container, Paper  } from '@mui/material';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState} from 'react';
import { ContractContext } from '../../sections/contrat/DetailContext';
import { useLocation } from 'react-router-dom';
import {  BrowserRouter } from 'react-router-dom';
import {    FormControl, InputLabel, Select, MenuItem,makeStyles } from '@material-ui/core';
import {
  Grid,
  Avatar,
  TextField,
  Scrollbar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  IconButton
} from '@mui/material';
const useStyles = makeStyles((theme) => ({
  noOutline: {
    border: 'none',
    },
  card: {
    padding: theme.spacing(1),
    marginTop:'20px',
    margin: theme.spacing(1),
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' // Ombre portée ajoutée ici

  },
  title: {
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    marginBottom:'5px',
    color: '#333',
  },
  button: {
    marginTop: theme.spacing(3),
    backgroundColor: '#007bff',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
}));

export const Details = ({  onDelete, onModify }) => {
  const selectedDetail = JSON.parse(window.sessionStorage.getItem('selectedDetail'));
  const classes = useStyles();
  const [contrats, setcontrats] = useState([
    {
      user_form:1,
      Société_a_résilier: '',
      Type_de_Résiliation: '',
      Type_de_contrat: '',
      Nom_assurance: '',
      Adresse: '',
      N_contrat: '',
      N_SS: '',
      Code_postale: '',
      Ville: '',
      Nombre_de_contrat: '',
      N_RAR: '',
      Commentaire: '',
      Date_effet: '',
      Date_de_résiliation: '',
    },
]);

const addForm = () => {
    setcontrats([...contrats, {
      user_form:1,
      Société_a_résilier: '',
      Type_de_Résiliation: '',
      Type_de_contrat: '',
      Nom_assurance: '',
      Adresse: '',
      N_contrat: '',
      N_SS: '',
      Code_postale: '',
      Ville: '',
      Nombre_de_contrat: '',
      N_RAR: '',
      Commentaire: '',
      Date_effet: '',
      Date_de_résiliation: '',
    }]);
};

const handleChange = (e, index) => {
  event.preventDefault(); // Empêche le rechargement de la page

  const { name, value } = e.target;
  const updatedForms = [...contrats];

  // Vérifiez si l'index est valide
  if (updatedForms[index]) {
      updatedForms[index][name] = value;
      setcontrats(updatedForms);
  } else {
      console.error(`L'objet à l'index ${index} n'existe pas dans contrats.`);
  }
};

  const handleDelete = () => {
    if (onDelete) {
      onDelete(selectedDetail.id);
    }
  };

  const handleModify = () => {
    if (onModify) {
      onModify(selectedDetail);
    }
  };
 

  useEffect(() => {
        // Ici, vous pouvez effectuer des actions en réaction au changement de selectedDetail

        console.log( "-------------",selectedDetail);

        // Par exemple, charger plus d'informations, mettre à jour l'UI, etc.
    
});


////////////////////////////////////////


const user = JSON.parse(window.sessionStorage.getItem('user'));
    const username=user.username
    const [fullname,setFullname] = useState("");
    const [fPrenom,setfPrenom] = useState("");
    const [fNai,setfNai] = useState("");
    const [fSexe,setfSexe] = useState("");
    const [fRegime,setfRegime] = useState("");
    const [fSitu,setfSitu] = useState("");
    const [fville,setfville] = useState("");
    const [fAdresse,setfAdresse] = useState("");
    const [fAdresse2,setfAdresse2] = useState("");
    const [fCpo,setfCpo] = useState("");
    const [ftel,setftel] = useState("");
    const [ftel1,setftel1] = useState("");
    const [factive,setfactive] = useState("");
    const [fprof,setfprof] = useState("");
    const [fPays_de_naissance,setfPays_de_naissance] = useState("");
    const [fvilN,setfvilN] = useState("");
    const [fCP,setfCP] = useState("");
    const [fCom,setfCom] = useState("");
    const [fEmail,setfEmail] = useState("");

    
/////////////////////////////

  return (
    <BrowserRouter>

    <Card style={{ 
    padding: '10px', 
 
    margin: '2rem', 
    boxSizing: 'border-box'}}>
    <form  >
    <Grid container spacing={3}>
    <Grid item xs={4}>

      <TextField
        id="ch1"
        label="Nom"
         
        fullWidth
        value={selectedDetail.fullname}
        onChange={(e) => setFullname(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      </Grid>
      <Grid item xs={4}>

      <TextField
        id="ch2"
        label="Prenom"
         
        fullWidth
        value={selectedDetail.fPrenom}
        onChange={(e) => setfPrenom(e.target.value)}
        style={{ marginBottom: '20px' }}

      />
            </Grid>
            <Grid item xs={4}>


      <TextField
        id="ch3"
        label="Date de naissance"
        type="date"
        fullWidth
        value={selectedDetail.fNai}
        onChange={(e) => setfNai(e.target.value)}
        style={{ marginBottom: '20px' }}

      />
            </Grid>

            <Grid item xs={4}>

      <FormControl   fullWidth>
        <InputLabel id="sex-label">Sexe</InputLabel>
        <Select
          labelId="sex-label"
          id="ch4"
          value={selectedDetail.fSexe}
          onChange={(e) => setfSexe(e.target.value)}
          label="Sexe"
          style={{ marginBottom: '20px' }}

        >
          <MenuItem value="Femme">Femme</MenuItem>
          <MenuItem value="Homme">Homme</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={4}>

      <TextField
        id="ch5"
        label="Régime"
         
        fullWidth
        value={selectedDetail.fRegime}
        onChange={(e) => setfRegime(e.target.value)}
        style={{ marginBottom: '20px' }}

      />
            </Grid>
            <Grid item xs={4}>


      <FormControl   fullWidth>
        <InputLabel id="situ-label">Situation</InputLabel>
        <Select
          labelId="situ-label"
          id="ch6"
          value={selectedDetail.fSitu}
          onChange={(e) => setfSitu(e.target.value)}
          label="Situation"
          style={{ marginBottom: '20px' }}

        >
          <MenuItem value="célibataire">Célibataire</MenuItem>
          <MenuItem value="divorcé(e)">Divorcé(e)</MenuItem>
          <MenuItem value="Marié(e)">Marié(e)</MenuItem>
          {/* Ajoutez d'autres options ici si nécessaire */}
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={4}>

      <TextField
        id="ch7"
        label="Ville"
         
        fullWidth
        value={selectedDetail.fville}
        onChange={(e) => setfville(e.target.value)}
        style={{ marginBottom: '20px' }}
        className={classes.noOutline}


      />
            </Grid>
            <Grid item xs={4}>

      <TextField
        id="ch8"
        label="Adresse"
         
        fullWidth
        value={selectedDetail.fAdresse}
        onChange={(e) => setfAdresse(e.target.value)}
        style={{ marginBottom: '20px' }}
        className={classes.noOutline}

      />
            </Grid>

            <Grid item xs={4}>


      <TextField
        id="ch9"
        label="Adresse optionel"
         
        fullWidth
        value={selectedDetail.fAdresse2}
        onChange={(e) => setfAdresse2(e.target.value)}
        className={classes.noOutline}
        style={{ marginBottom: '20px' }}

      />
            </Grid>

            <Grid item xs={4}>

      <TextField
        id="ch10"
        label="Code Postal"
         
        fullWidth
        value={selectedDetail.fCpo}
        onChange={(e) => setfCpo(e.target.value)}
        style={{ marginBottom: '20px' }}
        className={classes.noOutline}

      />
            </Grid>
            <Grid item xs={4}>


      <TextField
        id="ch11"
        label="Email"
        type="email"
         
        fullWidth
        value={selectedDetail.fEmail}
        onChange={(e) => setfEmail(e.target.value)}
        style={{ marginBottom: '20px' }}
        className={classes.noOutline}

      />
            </Grid>
            <Grid item xs={4}>


      <TextField
        id="ch12"
        label="Tél/Portable"
         
        fullWidth
        value={selectedDetail.ftel}
        onChange={(e) => setftel(e.target.value)}
        style={{ marginBottom: '20px' }}
        className={classes.noOutline}

      />
            </Grid>

            <Grid item xs={4}>

      <TextField
        id="ch13"
        label="Tél 1"
         
        fullWidth
        value={selectedDetail.ftel1}
        onChange={(e) => setftel1(e.target.value)}
        style={{ marginBottom: '20px' }}
        className={classes.noOutline}

      />
            </Grid>
            <Grid item xs={4}>


      <TextField
        id="ch14"
        label="Catégorie professionnelle"
         
        fullWidth
        value={selectedDetail.fprof}
        onChange={(e) => setfprof(e.target.value)}
        style={{ marginBottom: '20px' }}
        className={classes.noOutline}

      />
            </Grid>
            <Grid item xs={4}>


      <TextField
        id="ch15"
        label="Activité"
         
        fullWidth
        value={selectedDetail.factive}
        onChange={(e) => setfactive(e.target.value)}
        style={{ marginBottom: '20px' }}
        className={classes.noOutline}

      />
            </Grid>
            <Grid item xs={4}>


<TextField
        id="ch16"
        label="Ville de naissance"
         
        fullWidth
        value={selectedDetail.fvilN}
        onChange={(e) => setfvilN(e.target.value)}
        style={{ marginBottom: '20px' }}
        className={classes.noOutline}

      />
            </Grid>

            <Grid item xs={4}>

      <TextField
        id="ch17"
        label="Pays de naissance"
         
        fullWidth
        value={selectedDetail.fPays_de_naissance}
        onChange={(e) => setfPays_de_naissance(e.target.value)}
        style={{ marginBottom: '20px' }}
        className={classes.noOutline}

      />
            </Grid>
            <Grid item xs={4}>


      <TextField
        id="ch18"
        label="CP de naissance"
         
        fullWidth
        value={selectedDetail.fCP}
        onChange={(e) => setfCP(e.target.value)}
        style={{ marginBottom: '20px' }}
        className={classes.noOutline}

      />
            </Grid>
            <Grid item xs={4}>


      <TextField
        id="ch19"
        label="Complément"
         
        fullWidth
        value={selectedDetail.fCom}
        onChange={(e) => setfCom(e.target.value)}
        style={{ marginBottom: '20px' }}
        className={classes.noOutline}

      />
            </Grid>
</Grid>
      <br></br>


      <div>
            {selectedDetail.contrats.map((contrat, index) => (
                        <Card key={index} className={classes.card} elevation={3} >
                        <Typography variant="h6" className={classes.title}>
                        Assurance
                    </Typography>
                    <form onSubmit={(e) => handleSubmit(e, index)}>
                    <Grid container spacing={3}>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Société_a_résilier"
                    name="Société_a_résilier"
                    value={contrat.Société_a_résilier}
                    onChange={(e) => handleChange(e, index)}
                    />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    fullWidth
                    label="Type de résiliation"
                    name="Type_de_résiliation"
                    value={contrat.Type_de_Résiliation}
                    onChange={(e) => handleChange(e, index)}

                     
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    fullWidth
                    label="Type contrat"
                    name="Type_de_contrat"
                    value={contrat.Type_de_contrat}
                    onChange={(e) => handleChange(e, index)}

                     
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    fullWidth
                    label="Nom assurance"
                    name="Nom_assurance"
                    value={contrat.Nom_assurance}
                    onChange={(e) => handleChange(e, index)}
                     
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Adresse"
                    name="Adresse"
                    value={contrat.Adresse}
                    onChange={(e) => handleChange(e, index)}
                     
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    fullWidth
                    label="N° contrat"
                    name="N_contrat"
                    value={contrat.N_contrat}
                    onChange={(e) => handleChange(e, index)}
                     
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    fullWidth
                    label="N° SS"
                    name="N_SS"
                    value={contrat.N_SS}
                    onChange={(e) => handleChange(e, index)}
                     
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    fullWidth
                    label="Code postale"
                    name="Code_postale"
                    value={contrat.Code_postale}
                    onChange={(e) => handleChange(e, index)}
                     
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    fullWidth
                    label="Ville"
                    name="Ville"
                    value={contrat.Ville}
                    onChange={(e) => handleChange(e, index)}
                     
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    fullWidth
                    label="Nombre de contrat"
                    name="Nombre_de_contrat"
                    value={contrat.Nombre_de_contrat}
                    onChange={(e) => handleChange(e, index)}
                     
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    fullWidth
                    label="N° RAR"
                    name="N_RAR"
                    value={contrat.N_RAR}
                    onChange={(e) => handleChange(e, index)}
                     
                />
            </Grid>
            
            <Grid item xs={3}>
                <TextField
                    fullWidth
                    label="Date effet"
                    name="Date_effet"
                    type="date"
                    value={contrat.Date_effet}
                    onChange={(e) => handleChange(e, index)}
                    InputLabelProps={{
                      shrink: true, // Le label restera toujours au-dessus de l'input
                  }}
                     
                />
            </Grid>
            <Grid item xs={3}>
    <TextField
        fullWidth
        label="Date de résiliation"
        name="Date_de_résiliation"
        type="date"
        value={contrat.Date_de_résiliation}
        onChange={(e) => handleChange(e, index)}
        InputLabelProps={{
          shrink: true, // Le label restera toujours au-dessus de l'input
      }}
        
    />
</Grid>
<Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Commentaire"
                    name="Commentaire"
                    value={contrat.Commentaire}
                    onChange={(e) => handleChange(e, index)}
                     
                />
            </Grid>
        </Grid>
                    </form>
                </Card>
            ))}
            

        </div>
                

                
    </form>
  </Card>
    </BrowserRouter>

  );
};

Details.propTypes = {
};