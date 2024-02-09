//import React from 'react';
//import { TextField, Button, Grid, Box } from '@mui/material';

/*const Environment = () => {
    return (
        <div>
            <h1>Environment Page</h1>
        </div>

    );
}*/


/*

import {React, Fragment, useState } from 'react';
import { Typography,TextField, Button, Container, Stack } from '@mui/material';

function Environment() {
    // State variables to store the user's input
    const [launchDate, setLaunchDate] = useState('2024/02/05');
    const [location, setLocation] = useState('Golegã Chamusca EN 118 Pinheiro Grande');
    const [launchTimeUTC, setLaunchTimeUTC] = useState('06:14');
    const [railLength, setRailLength] = useState(6);
    const [atmosphericModel, setAtmosphericModel] = useState('Forecast');

    // Function to handle the form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform simulation with the user's input
        console.log('Simulating environment for launch on', launchDate, 'at', launchTimeUTC, 'UTC in', location, 'with a launch rail of', railLength, 'meters using', atmosphericModel, 'atmospheric model.');
    };

    return (
       /* <React.Fragment>
          <div class = "title">  <h1> Environment variables</h1>
          </div>
    <div class = "inputparams">
        <form onSubmit={handleSubmit}>
         <div id = "rowone"> 
        <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
            <label>
                When are you launching?
                <input type="date" value={launchDate} onChange={(e) => setLaunchDate(e.target.value)} />
                <input type="time" value={launchTimeUTC} onChange={(e) => setLaunchTimeUTC(e.target.value)} />
            </label>
        
        </Stack>
        </div>
        <Stack>
            <label>
                Specify Location of Data
                <select value={location} onChange={(e) => setLocation(e.target.value)}>
                    <option value='Pinheiro Grande'>Pinheiro Grande - Latitude: 39.7739° S, Longitude: 28.2137° W</option>
                    <option value='Pinheiro Grande'>Pinheiro Grande</option>
                </select> 
            </label>
            <label>
                Size of Launch Rail in meters
                <input type="number" value={railLength} onChange={(e) => setRailLength(e.target.value)} />
            </label>
        

            <label>
                Atmospheric Model for Environment Setup
                <select value={atmosphericModel} onChange={(e) => setAtmosphericModel(e.target.value)}>
                    <option value="Forecast">Forecast</option>
                   // { Add more options as needed }
                </select>
            </label>
            </Stack>
            <button type="submit">Run Environment Simulation</button>
        </form>
        </div>
        </React.Fragment>

    );
}


<React.Fragment>
    <Stack spacing={2} direction={row} sx={{marginBottom:4}}>

        <Stack>
            <Typography variant="h2" >Environment Variables</Typography>
        </Stack>

    </Stack>
</React.Fragment>
    )
}

export default Environment;

export { Environment }



import React, { useState } from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const libraryReq = {
  key: 'YOUR_GOOGLE_MAP_API_KEY',
};

const Environment = () => {
  const [location, setLocation] = useState({
    lat: 39.38970,
    lng: -8.28896,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the form data to the API for processing and simulation
  };

  const handleLocationChange = (event) => {
    const coords = event.target.value.split(/\s|\+|\-/);
    if (coords.length === 2) {
      setLocation({
        lat: parseFloat(coords[0]),
        lng: parseFloat(coords[1]),
      });
    }
  };

  return (
    <LoadScript library={libraryReq}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Environment Simulation
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            //{ ... }
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Location (separated by + or -)"
                name="location"
                variant="outlined"
                helperText="E.g. Golegã + Chamusca EN 118 Pinheiro Grande"
                onChange={handleLocationChange}
              />
            </Grid>
            //{ ... }
            <Grid item xs={12}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
              >
                <Marker position={location} />
              </GoogleMap>
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary">
            Simulate Environment
          </Button>
        </form>
      </Container>
    </LoadScript>
  );
};

export default Environment;*/

import React, { useState } from 'react';
import { TextField, Button, Grid,FormControl,InputLabel, Select, MenuItem, Box } from '@mui/material';
//

function Environment () {
  const [data, setData] = useState({
    sizeOfLaunchRail: '',
    latitude: '',
    longitude: '',
    meanSeaLevelElevation: '',
    launchDate: '',
    launchTime: '',
    atmosphericModel: '',
    Location: '',
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  function FormRow1() {
    return (
      <React.Fragment>
        <Grid container spacing={2}>
        <Grid item xs={15} sm={3}>
          <TextField
            label="Size of Launch Rail (meters)"
            name="sizeOfLaunchRail"
            value={data.sizeOfLaunchRail}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={15} sm={3}>
          <TextField
            label="Latitude"
            name="latitude"
            value={data.latitude}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={15} sm={3}>
          <TextField
            label="Longitude"
            name="longitude"
            value={data.longitude}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={15} sm={3}>
          <TextField
            label="Mean Sea Level Elevation (meters)"
            name="meanSeaLevelElevation"
            value={data.meanSeaLevelElevation}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow2() {
    return (
      <React.Fragment>
         <Grid container spacing={2}>
      <Grid item xs={15} sm={3}>
      <TextField
            label="Launch Date"
            name="launchDate"
            value={data.launchDate}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={15} sm={3}>
      <TextField
            label="Launch Time"
            name="launchTime"
            value={data.launchTime}
            onChange={handleChange}
            fullWidth
          />
          </Grid>
        <Grid item xs={15} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Atmospheric Model for Environment Setup</InputLabel>
            <Select
              label="Atmospheric Model for Environment Setup"
              name="atmosphericModel"
              value={data.atmosphericModel}
              onChange={handleChange}
            >
              <MenuItem value="Forecast">Forecast</MenuItem>
              <MenuItem value="History">History</MenuItem>
              
            </Select>
          </FormControl>
        </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow3() {
    return (
      <React.Fragment>
         <Grid container spacing={2}>
        <Grid item xs={15} sm={12}>
          <FormControl fullWidth>
            <InputLabel>Specify Location of Data</InputLabel>
            <Select
              label="Specify Location of Data"
              name="Location"
              value={data.Location}
              onChange={handleChange}
            >
              <MenuItem value="GFS">GFS</MenuItem>
              {/* Add more options here as needed */}
            </Select>
          </FormControl>
        </Grid>
        </Grid>
      </React.Fragment>
    );
  }


  return (
    <form onSubmit={handleSubmit}>

    <Grid padding={2}>
        <FormRow1 />
    </Grid>
    <Grid padding={2}>   
        <FormRow2 />
    </Grid>
    <Grid padding={2}>
        <FormRow3 />
    </Grid>
    <Grid item xs={10} padding={2}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Run Enviroment Simulation
          </Button>
        </Grid>
    </form>
  );
};

export default Environment;