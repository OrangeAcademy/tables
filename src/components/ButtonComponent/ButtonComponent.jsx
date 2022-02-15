import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const ButtonComponent = ({ variant, disabled, content, color, startIcon, onClick, sx }) => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button onClick={onClick} startIcon={startIcon} color={color} variant={variant} disabled={disabled} sx={sx}>
          {content}
        </Button>
      </Stack>
    </>
  );
};

export default ButtonComponent;
