import React, {useEffect, useState} from 'react';
import './custom-popup-module.css';
import {Grid} from "@mui/material";
import Inputs from "../../Inputs/Inputs";
import Calendar from "../../Calendar/Calendar";

interface IProps {
  title?: string;
  show: boolean;
  onClose: Function;
  children: JSX.Element;
  getNextEventFunction?:() => void
}

const CustomPopup = (props: any) => {
  const [show, setShow] = useState(false);
  const closeHandler = () => {
    setShow(false);
    props.onClose(false);
  };


  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const test = "test"

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
        <div className="content">
          <Grid container spacing={2}>
            <Grid item xs={12} md={7} lg={7}>
              <Inputs onClose={props.onClose} getNextEventFunction={props.getNextEventFunction}/>
            </Grid>
            <Grid item xs={12} md={5} lg={5}>
              <Calendar/>
            </Grid>
          </Grid></div>
      </div>
    </div>
  );
};

export default CustomPopup;
