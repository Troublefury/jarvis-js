//import React from 'react';
//import { TextField, Button, Grid, Box } from '@mui/material';

/*const Environment = () => {
    return (
        <div>
            <h1>Environment Page</h1>
        </div>

    );
}*/

import React, { useState } from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';

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
        <React.Fragment>
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
                    {/* Add more options as needed */}
                </select>
            </label>
            </Stack>
            <button type="submit">Run Environment Simulation</button>
        </form>
        </div>
        </React.Fragment>

    );
}

export default Environment;

export { Environment }
