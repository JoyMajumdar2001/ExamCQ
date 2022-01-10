import { Alert, AlertTitle } from "@mui/material";
import React from "react";

export default function Error404() {
  return (
    <div>
      <Alert severity="error" sx={{ width: 1/3 ,margin: 2}}>
        <AlertTitle>Error 404</AlertTitle>
        Page not found!
      </Alert>
    </div>
  );
}
