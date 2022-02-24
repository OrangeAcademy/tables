import { useEffect, useState } from 'react';
import './custom-popup-module.css';

interface IProps {
  title: string;
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

export default CustomPopup;