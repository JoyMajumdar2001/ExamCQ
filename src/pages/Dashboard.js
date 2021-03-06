import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import DataTable from "../components/DataTable";
import MyNavBar from "../components/MyNavBar";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [list, setList] = useState(null)
  let navigate = useNavigate();
  axios.get('https://examcq-api.onrender.com/getallexam')
  .then(function (response) {
    console.log(response.data);
    setList(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  return (
    <div>
      <MyNavBar />

      <Container className="mt-4">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
        <Typography variant="h6" gutterBottom component="div">
            Question Papers
          </Typography>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
        <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => {
              navigate("/compose");
            }}
          >
            Create
          </Button>
        </Grid>
      </Grid>
      </Container>

      <Container className="mt-4">
        <DataTable rows={list} />
      </Container>
    </div>
  );
}
