export interface IButton {
    onClick?: () => void;
    startIcon?: JSX.Element;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    variant?: "text" | "outlined" | "contained" | undefined;
    disabled?: boolean;
    sx?: { mx: string; width: number };
    content?: string;
}

export interface IAvatar {
    text: string;
    icon: JSX.Element;
}

export interface IEmail {
    options: { label: string }[];
    text: string;
    icon: JSX.Element;
    error?: boolean;
    onChange?: any;
}

export interface IInputs {
    text: string;
    icon: JSX.Element;
    onChange?:any;
    value?:string
}