import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const ButtonComponent = ({ variant, disabled, content, color, startIcon, onClick, style }) => {
  return (
    <>
      <Stack direction="row" spacing={2} fullWidth>
        <Button onClick={onClick} startIcon={startIcon} color={color} variant={variant} disabled={disabled} style={style}>
          {content}
        </Button>
      </Stack>
    </>
  );
};

export default ButtonComponent;
