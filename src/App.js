import React, { useEffect, useState } from "react";
import url from "./utils/api";
import axios from "axios";

import NavBar from "./components/NavBar";
import CardComponent from "./components/CardComponent";

import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";


const App = () => {
  const [ data, setData ] = useState(null);

  useEffect(() => {
    axios.get(url).then(response => setData(response.data.data)).catch((err) => console.log(err));
  }, [])

  return (
      <>
        <NavBar />
        {console.log(data)}
        <Container>
          <Grid container spacing={3} mt={1}>
            {data?.results.map((comic => (
              <Grid item xs={8} sm={3}>
                <CardComponent data={comic}/>
              </Grid>
            )))}
          </Grid>
        </Container>
      </>
  );
}

export default App;
