import { Grid } from "@mui/material";
import { useEffect, useState } from 'react';
import Inputs from "../../Inputs/Inputs";
import Calendar from "../Calendar/Calendar";
import './custom-popup-module.css';



interface IProps {
  title?: string;
  show: boolean;
  onClose: Function;
  children: JSX.Element;
}



const CustomPopup = (props: IProps) => {
  const [show, setShow] = useState(false);

  const closeHandler = () => {
    setShow(false);
    props.onClose(false);
  };


  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? '1' : '0',
      }}
      className="overlay"
    >
      <div className="popup">
        <h2 className="reservationTitle">{props.title}</h2>
        <span className="close" onClick={closeHandler}>
          &times;
        </span>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

interface ICreateNewReservation {
  setVisibility:  React.Dispatch<React.SetStateAction<boolean>>;
  visibility: boolean;
}

const CreateNewReservation = ({setVisibility, visibility}: ICreateNewReservation) => {
  return (
    <CustomPopup title="Book a meeting" onClose={setVisibility} show={visibility}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={7} lg={7}>
        <Inputs/>
      </Grid>
      <Grid item xs={12} md={5} lg={5}>
        <Calendar />
      </Grid>
    </Grid>
  </CustomPopup>
  )
}


export default CreateNewReservation;
