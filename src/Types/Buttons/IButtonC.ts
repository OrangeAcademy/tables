import { ButtonPropsColorOverrides } from "@mui/material";

export interface IPropsButtonC {
  onClick?: () => void;
  startIcon?: JSX.Element;
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  variant?: "text" | "outlined" | "contained" | undefined;
  disabled?: boolean;
  sx?: { mx: string; width: number };
  content?: string;
}
