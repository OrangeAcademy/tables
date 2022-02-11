import { grey } from '@mui/material/colors';


// Styles
export const boxStyles = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '30px'
};

export const buttonStyles = {
  width: 245,
  height: 155,
  backgroundColor: ' #a6dab3',
  fontSize: '1.6rem',
  boxShadow: 1,
  border: 0,
  borderRadius: 2,
  flexShrink: 1,
  mb: 8.5,
  '&:hover': {
    backgroundColor: "#fef9e5",
    opacity: [0.4, 0.4, 0.9],
    borderColor: grey[500]
  },
  '&:hover > *': {
    color: "#75726c"
  },

  '&:active': {
    backgroundColor: "#fef9e5",
    opacity: [0.4, 0.4, 0.9],
    borderColor: grey[500]
  },
  '&:active > *': {
    color: "#75726c"
  },

  '&:target': {
    backgroundColor: "#fef9e5",
    opacity: [0.4, 0.4, 0.9],
    borderColor: grey[500]
  },
  '&:target > *': {
    color: "#75726c"
  }
  ,

  '&:focus': {
    backgroundColor: "#fef9e5",
    opacity: [0.4, 0.4, 0.9],
    borderColor: grey[500]
  },
  '&:focus > *': {
    color: "#75726c"
  }
};


export const textStyles = {
  fontSize: '2.5rem',
  color: "#5e9073",
}