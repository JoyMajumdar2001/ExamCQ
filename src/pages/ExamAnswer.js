import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Typography } from "@mui/material";
import QpSelect from "../components/QpSelect";

export default function ExamAnswer() {
  const { id } = useParams();
  const [examData, setExamData] = useState(null);
  const [ques, setQues] = useState(null);
  const [ans, setAns] = useState([]);
  axios
    .get("https://examcq-api.onrender.com/examdata/"+id)
    .then(function (response) {
      setExamData(response.data);
      setQues(JSON.parse(examData.data))
    })
    .catch(function (error) {
      console.log(error);
    });

    const ansSelectHandel = (index,ansd)=>{
        const list = [...ques];
        const listAns = [...ans];
        listAns[index]["ans"] = ansd;
        if(list[index]["ans"] === listAns[index]["ans"]){
            listAns[index]["right"] = true;
        }
        setQues(list);
    };
  return(
    <div>
      <Container className="p-4 bg-light text-dark">
      <Typography variant="h3" component="div" gutterBottom>
        Physics II
      </Typography>
      {ques.map((xd, id) => {
          setAns([
            ...ans,
            { id:id,ans:0, right:false },
          ]);
          return (
            <QpSelect
              x={xd}
              i={id}
              ansData={ques}
              onCliclkFn={ansSelectHandel}
              key={id}
            />
          );
        })}
      </Container>
    </div>
  );
}
