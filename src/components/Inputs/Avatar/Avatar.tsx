import { ClassNameMap } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IPropsInputs } from "../../../Types/IGlobal";

const useStyles = makeStyles({
  avatar: {
    width: "50px",
    height: "50px",
    background: "#3E50B4",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: "25px",
  },
});
const Avatar = (props: IPropsInputs): JSX.Element => {
  const classes: ClassNameMap<"avatar" | "text"> = useStyles();
  return (
    <>
      <div className={classes.avatar}>{props.icon}</div>
      <div className={classes.text}>{props.text}</div>
    </>
  );
};

export default Avatar;
