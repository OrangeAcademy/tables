import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { yellow } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

const boxStyle = {
    gap: 6,
    display: 'flex',
    justifyContent: 'center',
     p: 10,
     m: 8,   
}

const buttonStyle = {
        color: grey[800],
        width: 190,
        height: 100,
        backgroundColor: green[100],
        fontSize: '1.6rem',  
        fontWeight: 'bold',
        boxShadow: 1,
        border: 0,
        borderRadius: 2, 
         '&:hover': {
            backgroundColor: yellow[50],
            opacity: [0.4, 0.4, 0.9],
            borderColor: grey[500],
        },
}

export default function ButtonGroupComponent() {
        return (
        
            <Box
                sx={{
                   ...boxStyle
                 }}
             >      
               <Button 
                   sx={{
                      ...buttonStyle
                    }}
                      >15 min</Button>

                <Button 
                      sx={{
                        ...buttonStyle
                      }}
                         >30 min</Button>

                <Button 
                      sx={{
                          ...buttonStyle
                      }}
                        >45 min</Button>

                <Button 
                      sx={{
                        ...buttonStyle
                      }}
                       >60 min</Button>

              </Box> 
            );
}
  

