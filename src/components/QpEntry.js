import { Card } from "@mui/material";
import React, { useState } from "react";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";

export default function QpEntry({onChangeFn,removeFn,x,i,setAnsOption}) {

  return (
    <div>
      <Container>
        <Card variant="outlined" sx={{ margin: 2 }}>
          <Container className="p-5">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Question</InputGroup.Text>
              <FormControl
                placeholder="Question"
                aria-label="Question"
                aria-describedby="basic-addon1"
                as="textarea"
                name="qp"
                value={x.qp}
                onChange={e => onChangeFn(e, i)}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Radio aria-label="Radio button for following text input" onChange={() => setAnsOption(1,i)} checked={x.ans === 1}/>
              <InputGroup.Text id="basic-addon1">Option 1</InputGroup.Text>
              <FormControl aria-label="Text input with checkbox" name="o1" value={x.o1} onChange={e => onChangeFn(e, i)}/>
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Radio aria-label="Radio button for following text input" onChange={() => setAnsOption(2,i)} checked={x.ans === 2}/>
              <InputGroup.Text id="basic-addon1">Option 2</InputGroup.Text>
              <FormControl aria-label="Text input with checkbox"name="o2" value={x.o2} onChange={e => onChangeFn(e, i)}/>
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Radio aria-label="Radio button for following text input" onChange={() => setAnsOption(3,i)} checked={x.ans === 3}/>
              <InputGroup.Text id="basic-addon1">Option 3</InputGroup.Text>
              <FormControl aria-label="Text input with checkbox" name="o3" value={x.o3} onChange={e => onChangeFn(e, i)}/>
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Radio aria-label="Radio button for following text input" onChange={() => setAnsOption(4,i)} checked={x.ans === 4}/>
              <InputGroup.Text id="basic-addon1">Option 4</InputGroup.Text>
              <FormControl aria-label="Text input with checkbox" name="o4" value={x.o4} onChange={e => onChangeFn(e, i)}/>
            </InputGroup>
            <InputGroup>
            <Button variant="danger" onClick={() => removeFn(i)}>Delete</Button>
            </InputGroup>
          </Container>
        </Card>
      </Container>
    </div>
  );
}
