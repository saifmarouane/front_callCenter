import { useState } from "react"
import { createFormData,readFormData,updateFormData,deleteFormData } from './formcrud';
import PropTypes from 'prop-types';

import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import React from 'react';
import {   Button, FormControl, InputLabel, Select, MenuItem,makeStyles } from '@material-ui/core';
import {  Container, SvgIcon } from '@mui/material';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
// ... (le reste de votre code)
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
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)' // Ombre portée ajoutée ici

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
import { format } from 'date-fns';
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


  

export const Addpost = (props) => {
    const {
        count = 0,
        items = [],
        onDeselectAll,
        onDeselectOne,
        onPageChange = () => {},
        onRowsPerPageChange,
        onSelectAll,
        onSelectOne,
        page = 0,
        rowsPerPage = 0,
        selected = []
      } = props;
    const user = JSON.parse(window.sessionStorage.getItem('user'));
    const username=user.username
    const [fullname,setFullname] = useState("");
    const [fPrenom,setfPrenom] = useState("");
    const [fSexe,setfSexe] = useState("");
    const [fNai,setfNai] = useState("");
    const [fRegime,setfRegime] = useState("");
    const [fSitu,setfSitu] = useState("");
    const [fville,setfville] = useState("");
    const [fAdresse,setfAdresse] = useState("");
    const [fAdresse2,setfAdresse2] = useState("");
    const [fCpo,setfCpo] = useState("");
    const [fEmail,setfEmail] = useState("");
    const [ftel,setftel] = useState("");
    const [ftel1,setftel1] = useState("");
    const [factive,setfactive] = useState("");
    const [fprof,setfprof] = useState("");
    const [fPays_de_naissance,setfPays_de_naissance] = useState("");
    const [fvilN,setfvilN] = useState("");
    const [fCP,setfCP] = useState("");
    const [fCom,setfCom] = useState("");

    
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const data={

    }
    function addPost(event) {



     const post = {
      username,
      fullname,
      fPrenom,
      fNai,
      fRegime,
      fSitu,
      fville,
      fAdresse,
      fAdresse2,
      fCpo,
      fSexe,
      ftel,
      ftel1,
      fprof,
      fPays_de_naissance,
      fEmail,
      fvilN,
      fCP,
      fCom,
      contrats,
     } 
     event.preventDefault(); // Empêche le rechargement de la page

     console.log("data",post)
     axios.post('http://localhost:8000/auth/user-forms/', post)
     .then(response => {
         console.log(response.data);
         setIsConfirmed(true);
         setSuccessMessage("Les informations ont été créées avec succès!");
     })
     .catch(error => {
         console.error('Erreur lors de l\'envoi des données:', error);
         setIsConfirmed(false);
         setSuccessMessage("");
     });
     


     
    }

      //------------ WORK WITH API -------------//
      const classes = useStyles();

      
      const [contrats, setcontrats] = useState([
        {
            
            Société_a_résilier: '',
            Type_de_Résiliation: '',
            Type_de_contrat: '',
            Nom_assurance: '',
            Adresse: '',
            N_contrat: '',
            N_SS: '',
            Code_postale: '',
            Ville: '',
            Nombre_de_contrat:1,
            N_RAR: '',
            Commentaire: '',
            Date_effet: '',
            Date_de_résiliation: '',
        },
    ]);

    const addForm = () => {
        setcontrats([...contrats, {
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
      }
  };
  

    const handleSubmit = (e, index) => {
        event.preventDefault(); // Empêche le rechargement de la page
 
        e.preventDefault();
    };
    const deleteForm = (indexToDelete) => {
      setcontrats(prevcontrats => {
          // Filtrer et retourner les données du formulaire sans l'élément à supprimer

          return prevcontrats.filter((_, index) => index !== indexToDelete);
      });
  };
  

  //imprimer:
 
  
  
  const handleGeneratePDF = () => {
    const pdf = new jsPDF();

    // Ajoutez le contenu du modèle de lettre au PDF
    pdf.text(20, 20, 'Objet : Mandat de délégation');
    pdf.text(20, 30, 'Madame, Monsieur,');
    pdf.text(20, 40, 'Je soussigné(e) TROUVE BRIGITTE');
    pdf.text(20, 50, 'demeurant 124 residence jean yole 37 rue gutenberg 85000 LA ROCHE SUR YON');
    pdf.text(20, 60, 'donne mandat à TSA Assurances, pour agir en mon nom et pour mon compte afin de');
    pdf.text(20, 70, 'résilier/renoncer ou réclamer mes contrat(s) ou abonnement(s).');
    pdf.text(20, 80, 'Fait à: LA ROCHE SUR YON , Le 20-12-23');

    // Nouveau contenu
    pdf.text(20, 100, 'Bon pour mandat je veux changer avec cette lettre la');

    // Données de la table (exemple de tableau de données)




    // En-têtes de colonnes
    const columns = ["Société à résilier", "Type de contrat", "Nombre de contrat", "N° contrat", "N° SS"];

    // Données de la table (correspondant aux colonnes sélectionnées)
    const data = contrats.map((rowData) => {
        return [
            rowData.Société_a_résilier,
            rowData.Type_de_contrat,
            rowData.Nombre_de_contrat,
            rowData.N_contrat,
            rowData.N_SS
        ];
    });

    // Position Y de départ pour la table
    let startY = 120;

    // Utilisez jsPDF-AutoTable pour créer la table
    pdf.autoTable({
        startY,
        head: [columns],
        body: data,
        theme: 'striped',
        margin: { top: 10 }, // Ajustez la marge supérieure si nécessaire
    });

    // Enregistrez le PDF
    pdf.save('mandat_delegation.pdf');
};


  //
  

return (
  <Card style={{ 
    padding: '10px', 
 
    margin: '2rem', 
    boxSizing: 'border-box'}}>
    <form onSubmit={addPost} >
    <Grid container spacing={3}>
    <Grid item xs={4}>

      <TextField

      required

        id="ch1"
        label="Nom"
        
        
         
        fullWidth
        fullHeight
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      />
      </Grid>
      <Grid item xs={4}>

      <TextField
   required

        id="ch2"
        label="Prenom"
         
        fullWidth
        value={fPrenom}
        onChange={(e) => setfPrenom(e.target.value)}


      />
            </Grid>
            <Grid item xs={4}>


      <TextField


        id="ch3"
        label="Date de naissance"
        type="date"
        required

        fullWidth
        value={fNai}
        onChange={(e) => setfNai(e.target.value)}

        InputLabelProps={{
          shrink: true, // Le label restera toujours au-dessus de l'input
      }}

      />
            </Grid>

            <Grid item xs={4}>

      <FormControl   fullWidth>
        <InputLabel id="sex-label">Sexe</InputLabel>
        <Select
          labelId="sex-label"
          id="ch4"
          value={fSexe}
          onChange={(e) => setfSexe(e.target.value)}
          label="Sexe"
  

        >
          <MenuItem value="Femme">Femme</MenuItem>
          <MenuItem value="Homme">Homme</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={4}>

      <TextField
   required

        id="ch5"
        label="Régime"
         
        fullWidth
        value={fRegime}
        onChange={(e) => setfRegime(e.target.value)}


      />
            </Grid>
            <Grid item xs={4}>


      <FormControl   fullWidth>
        <InputLabel id="situ-label">Situation</InputLabel>
        <Select
          labelId="situ-label"
          id="ch6"
          value={fSitu}
          onChange={(e) => setfSitu(e.target.value)}
          label="Situation"
  

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
   required

        id="ch7"
        label="Ville"
         
        fullWidth
        value={fville}
        onChange={(e) => setfville(e.target.value)}

        className={classes.noOutline}


      />
            </Grid>
            <Grid item xs={4}>

      <TextField
   required

        id="ch8"
        label="Adresse"
         
        fullWidth
        value={fAdresse}
        onChange={(e) => setfAdresse(e.target.value)}

        className={classes.noOutline}

      />
            </Grid>

            <Grid item xs={4}>


      <TextField
   required

        id="ch9"
        label="Adresse optionel"
         
        fullWidth
        value={fAdresse2}
        onChange={(e) => setfAdresse2(e.target.value)}
        className={classes.noOutline}


      />
            </Grid>

            <Grid item xs={4}>

      <TextField
   required

        id="ch10"
        label="Code Postal"
         
        fullWidth
        value={fCpo}
        onChange={(e) => setfCpo(e.target.value)}

        className={classes.noOutline}

      />
            </Grid>
            <Grid item xs={4}>


      <TextField
   required

        id="ch11"
        label="Email"
        type="email"
         
        fullWidth
        value={fEmail}
        onChange={(e) => setfEmail(e.target.value)}

        className={classes.noOutline}

      />
            </Grid>
            <Grid item xs={4}>


      <TextField
   required

        id="ch12"
        label="Tél/Portable"
         
        fullWidth
        value={ftel}
        onChange={(e) => setftel(e.target.value)}

        className={classes.noOutline}

      />
            </Grid>

            <Grid item xs={4}>

      <TextField
   required

        id="ch13"
        label="Tél 1"
         
        fullWidth
        value={ftel1}
        onChange={(e) => setftel1(e.target.value)}

        className={classes.noOutline}

      />
            </Grid>
            <Grid item xs={4}>


      <TextField
   required

        id="ch14"
        label="Catégorie professionnelle"
         
        fullWidth
        value={fprof}
        onChange={(e) => setfprof(e.target.value)}

        className={classes.noOutline}

      />
            </Grid>
            <Grid item xs={4}>


      <TextField
   required

        id="ch15"
        label="Activité"
         
        fullWidth
        value={factive}
        onChange={(e) => setfactive(e.target.value)}

        className={classes.noOutline}

      />
            </Grid>
            <Grid item xs={4}>


<TextField
   required

        id="ch16"
        label="Ville de naissance"
         
        fullWidth
        value={fvilN}
        onChange={(e) => setfvilN(e.target.value)}

        className={classes.noOutline}

      />
            </Grid>

            <Grid item xs={4}>

      <TextField
   required

        id="ch17"
        label="Pays de naissance"
         
        fullWidth
        value={fPays_de_naissance}
        onChange={(e) => setfPays_de_naissance(e.target.value)}

        className={classes.noOutline}

      />
            </Grid>
            <Grid item xs={4}>


      <TextField
   required

        id="ch18"
        label="CP de naissance"
         
        fullWidth
        value={fCP}
        onChange={(e) => setfCP(e.target.value)}

        className={classes.noOutline}

      />
            </Grid>
            <Grid item xs={4}>


      <TextField
   required

        id="ch19"
        label="Complément"
         
        fullWidth
        value={fCom}
        onChange={(e) => setfCom(e.target.value)}

        className={classes.noOutline}

      />
            </Grid>
</Grid>
      <br></br>


      <div>
            {contrats.map((formData, index) => (
                        <Card key={index} className={classes.card} elevation={3} >
                        <Typography variant="h6" className={classes.title}>
                        Assurance
                    </Typography>
                    <form onSubmit={(e) => handleSubmit(e, index)}>
                    <Grid container spacing={3}>
            <Grid item xs={6}>
                <TextField
   required

                    fullWidth
                    label="Société_a_résilier"
                    name="Société_a_résilier"
                    value={formData.Société_a_résilier}
                    onChange={(e) => handleChange(e, index)}
                    />
            </Grid>
            <Grid item xs={3}>
                <TextField
   required

                    fullWidth
                    label="Type de Résiliation"
                    name="Type_de_Résiliation"
                    value={formData.Type_de_Résiliation}
                    onChange={(e) => handleChange(e, index)}

                     
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
   required

                    fullWidth
                    label="Type contrat"
                    name="Type_de_contrat"
                    value={formData.Type_de_contrat}
                    onChange={(e) => handleChange(e, index)}

                     
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
   required

                    fullWidth
                    label="Nom assurance"
                    name="Nom_assurance"
                    value={formData.Nom_assurance}
                    onChange={(e) => handleChange(e, index)}
                     
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
   required

                    fullWidth
                    label="Adresse"
                    name="Adresse"
                    value={formData.Adresse}
                    onChange={(e) => handleChange(e, index)}
                     
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
   required

                    fullWidth
                    label="N° contrat"
                    name="N_contrat"
                    value={formData.N_contrat}
                    onChange={(e) => handleChange(e, index)}
                     
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
   required

                    fullWidth
                    label="N° SS"
                    name="N_SS"
                    value={formData.N_SS}
                    onChange={(e) => handleChange(e, index)}
                     
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
   required

                    fullWidth
                    label="Code postale"
                    name="Code_postale"
                    value={formData.Code_postale}
                    onChange={(e) => handleChange(e, index)}
                     
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
   required

                    fullWidth
                    label="Ville"
                    name="Ville"
                    value={formData.Ville}
                    onChange={(e) => handleChange(e, index)}
                     
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                   required
                   type="number"
                    fullWidth
                    label="Nombre de contrat"
                    name="Nombre_de_contrat"
                    value={formData.Nombre_de_contrat}
                    onChange={(e) => handleChange(e, index)}
                     
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
   required

                    fullWidth
                    label="N° RAR"
                    name="N_RAR"
                    value={formData.N_RAR}
                    onChange={(e) => handleChange(e, index)}
                     
                />
            </Grid>
            
            <Grid item xs={3}>
                <TextField
   required

                    fullWidth
                    label="Date effet"
                    name="Date_effet"
                    type="date"
                    value={formData.Date_effet}
                    onChange={(e) => handleChange(e, index)}
                    InputLabelProps={{
                      shrink: true, // Le label restera toujours au-dessus de l'input
                  }}
                     
                />
            </Grid>
            <Grid item xs={3}>
    <TextField
   required

        fullWidth
        label="Date de résiliation"
        name="Date_de_résiliation"
        type="date"
        value={formData.Date_de_résiliation}
        onChange={(e) => handleChange(e, index)}
        InputLabelProps={{
          shrink: true, // Le label restera toujours au-dessus de l'input
      }}
        
    />
</Grid>
<Grid item xs={6}>
                <TextField
   required

                    fullWidth
                    label="Commentaire"
                    name="Commentaire"
                    value={formData.Commentaire}
                    onChange={(e) => handleChange(e, index)}
                     
                />
            </Grid>
        </Grid>
                    </form>
                </Card>
            ))}
            <Button variant="contained" color="secondary" onClick={addForm}>
                Ajouter un nouveau 
            </Button>

        </div>
                <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
                    valider
                </Button>

                {isConfirmed && (
                    <div style={{ marginTop: '20px' }}>
                        <p>{successMessage}</p>
                        
                        <Button onClick={() => {setIsConfirmed(false),handleGeneratePDF()}}
                    
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
                    </div>
                )}
    </form>
  </Card>
);

// ... (le reste du code précédent)

    };
    
   
    
    Addpost.propTypes = {

    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
    selected: PropTypes.array
  };
  