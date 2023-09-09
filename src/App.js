import * as React from 'react';
import Grid from '@mui/material/Grid';


import MultiTextComponent from './components/multitextcomponent/Multitext.js';
import Button from '@mui/material/Button';

import './App.css';


export default function App() {
  const [result, updateResult] = React.useState("");
  const [data, updateData] = React.useState([]);

  React.useEffect(() => {
    console.log("updated data ", data);
  }, [data]);

  return (
    <Grid className='body-section' lg={12} sm={12} xs={12} container spacing={2} style={{margin:'0'}}>
      <Grid className='title-section' item lg={12} sm={12} xs={12}> <h2>RANDOMIZE ANYTHING</h2> </Grid>
      <Grid className='page-section' style={{padding:0, margin:0}} container item lg={12} sm={12} xs={12}>
        <Grid className='page-sections-item' style={{backgroundColor:"#F8EDE3", paddingLeft: 100}}  item lg={11} sm={12} xs={12}>
          <h3>Please entered the information that needs to be randomised</h3>
          <MultiTextComponent action = {updateData} data = {data}/>
          <h4>Choose Yes to randomize and get all information or No to pick just one random data : </h4>
          <h4>click here to start randomization</h4>
          <Button onClick={() => data ? updateResult(data[Math.floor(Math.random() * data.length)]) : ""} variant="contained">Start Randomize</Button>
          {result ? <p>result : {result} </p> : ""}
        </Grid>
      </Grid>
    </Grid>
  );
}
