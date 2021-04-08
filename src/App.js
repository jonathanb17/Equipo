
import './App.css';
import VistaNueva from './components/vistaNueva/VistaNueva';

import { useEffect } from 'react';

import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

//----------------------------------------------------------
import RadarChart from './components/Radar/RadarChart';
import Cancha from './components/imagenCancha/Cancha';
import Lista from './components/List/Lista';
import ParteTres from './components/Calificaciones/ParteTres';
// import Tabla from './components/Calificaciones/Tabla'


/**********************************************************************************/
// import Provando from './components/Calificaciones/Provando';
// import Filters from './components/Calificaciones/Filters';
// import Calificaciones from './components/Calificaciones/Calificaciones';
// import Union from './components/Calificaciones/Union';
// import ParteDos from './components/Calificaciones/ParteDos';





const useStyles = makeStyles(() => ({
  container: {
    paddingTop: "20px",
    paddingBottom: "20px",
    fontFamily: "Bebas-Bold",
  },
}));


function App() {

  const classes = useStyles();

  useEffect(() => {
    document.body.classList.add("background-Image");
    return () => {
      document.body.classList.remove("background-Image");
    };
  });



  return (
    <div className="App">
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12}>
            <ParteTres />
          </Grid>
          <Grid item xs={12} md={12} lg={3}>
            <Cancha />
          </Grid>
          <Grid item xs={12} md={12} lg={3}>
            <RadarChart />
          </Grid>
          <Grid item xs={12} md={12} lg={3}>
            <Lista />
          </Grid>
          <Grid item xs={12} md={12} lg={3}>
            <RadarChart />
          </Grid>
        </Grid>
      </Container>
      <VistaNueva />
    </div>
  );
}

export default App;
