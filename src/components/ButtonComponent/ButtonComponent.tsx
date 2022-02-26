import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { IPropsButtonC } from "../../Types/Buttons/IButtonC";

const ButtonComponent = (props: IPropsButtonC) => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={props.onClick}
          startIcon={props.startIcon}
          color={props.color}
          variant={props.variant}
          disabled={props.disabled}
          sx={props.sx}
        >
          {props.content}
        </Button>
      </Stack>
    </>
  );
};

export default ButtonComponent;
