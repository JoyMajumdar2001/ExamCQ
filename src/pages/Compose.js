import { Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import QpEntry from "../components/QpEntry";
import AddIcon from "@mui/icons-material/Add";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import uniqid from "uniqid";
import axios from "axios";

export default function Compose() {
  let navigate = useNavigate();
  const URL = "https://data.mongodb-api.com/app/data-oageq/endpoint/data/beta";
  const [title, setTitle] = useState("");

  const [inputList, setInputList] = useState([
    { qp: "", o1: "", o2: "", o3: "", o4: "", ans: 1 },
  ]);
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { qp: "", o1: "", o2: "", o3: "", o4: "", ans: 1 },
    ]);
  };
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleAnsChange = (val, index) => {
    const list = [...inputList];
    list[index]["ans"] = val;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleSubmitExam = () => {
    const dataExam = {
      dataSource: "waterdrop",
      database: "examcq",
      collection: "exams",
      document: {
        uid: uniqid(),
        name: title,
        data: JSON.stringify(inputList),
        created: new Date().toLocaleString(),
        modified: new Date().toLocaleString(),
        responses: 0,
      }
    };
    const headers = {
      "Content-Type": "application/json",
      "api-key":
        "aZmqC6K0tCMrImo5pjHZEIhmiyvEyQr8Edoqouies7VDezovhlaFhNZOWaHGIToz",
        "Access-Control-Request-Method":"POST"
    };
    axios
      .post(URL + "/action/insertOne", dataExam, { headers })
      .then(function (response) {
        console.log(response);
        navigate("/dashboard");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Stack direction="row" spacing={2} sx={{ m: 2 }}>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={() => navigate("/dashboard")}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Typography variant="h5" component="div">
          Create a new ExamCQ
        </Typography>
        <Button
          variant="contained"
          onClick={handleAddClick}
          startIcon={<AddIcon />}
        >
          Add Question
        </Button>
      </Stack>
      <Container className="mt-4">
        <InputGroup>
          <InputGroup.Text id="basic-addon1">Exam name</InputGroup.Text>
          <FormControl
            aria-label="Text input with checkbox"
            value={title}
            placeholder="Exam paper heading"
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputGroup>
      </Container>

      <Stack spacing={1} sx={{ m: 2 }}>
        {inputList.map((xd, id) => {
          return (
            <QpEntry
              onChangeFn={handleInputChange}
              x={xd}
              i={id}
              removeFn={handleRemoveClick}
              setAnsOption={handleAnsChange}
              key={id}
            />
          );
        })}
      </Stack>
      <Container className="mb-3">
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={handleSubmitExam}
        >
          Submit
        </Button>
      </Container>
    </div>
  );
}
