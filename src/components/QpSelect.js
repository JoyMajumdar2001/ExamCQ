import { Card, Typography } from "@mui/material";
import React from "react";
import { Container, ListGroup } from "react-bootstrap";

export default function QpSelect({ansData,onCliclkFn,i,x}) {
  return (
    <div>
      <Container>
        <Card variant="outlined" sx={{ p: 2 }}>
          <Container className="p-2">
            <Typography variant="h6" component="div">
              {x.qp}
            </Typography>

            <ListGroup as="ol" numbered className="mt-2">
              <ListGroup.Item action active={ansData.ans ===1} onClick={onCliclkFn(i,1)} as="li">{x.o1}</ListGroup.Item>
              <ListGroup.Item action active={ansData.ans ===2} onClick={onCliclkFn(i,2) }as="li">{x.o2}</ListGroup.Item>
              <ListGroup.Item action active={ansData.ans ===3} onClick={onCliclkFn(i,3)} as="li">{x.o3}</ListGroup.Item>
              <ListGroup.Item action active={ansData.ans ===4} onClick={onCliclkFn(i,4)} as="li">{x.o4}</ListGroup.Item>
            </ListGroup>
          </Container>
        </Card>
      </Container>
    </div>
  );
}
