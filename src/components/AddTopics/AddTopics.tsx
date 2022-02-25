import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Divider, IconButton, Input, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { Close, Done } from "@mui/icons-material";
import { Box } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface IProps {
  showAgenda: boolean;
  setShowAgenda: (val: boolean) => void;
}


export default function AddTopic({ showAgenda, setShowAgenda  }: IProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleClose = () => setShowAgenda(false);

  return (

      <Dialog
        fullScreen={fullScreen}
       
        open={showAgenda}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Box className='box_myComponent'
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pl: '0.5rem',
            pr: '0.6rem',
            }}>
           <DialogTitle id="responsive-dialog-title" 
                sx={{
                    fontSize: '1.8rem',
                    fontWeight: 600,
                    }}
                    >Add topics</DialogTitle>
                <IconButton aria-label="delete" sx={{ color: "#000099" }} size="large"  >
                  	<AddCircleOutlineIcon fontSize="inherit" />
               </IconButton>
        </Box>
        <DialogContent>
            <Table stickyHeader={true}>
              <TableHead >
                <TableRow>
                  <TableCell 
                  sx={{
                      fontSize: "1.1rem"
                  }}
                  >Edit/Remove</TableCell>
                  <TableCell
                   sx={{
                    fontSize: "1rem"
                }}
                  >Topic</TableCell>
                  <TableCell
                     sx={{
                      fontSize: "1rem"
                  }}
                  >Presenter</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                <TableCell>
                  <IconButton> <Done sx={{color: '#000099'}}/></IconButton>
                  <IconButton> <Close sx={{color: '#cd3a12'}} /> </IconButton>
                </TableCell>
                <TableCell>
                 <Input placeholder="Topic"/>
                </TableCell>
                <TableCell>
                 <Input placeholder="Presenter"/>
                </TableCell>
                </TableRow>
                <TableRow>
                  <Typography 
                     sx={{
                         display: 'flex',
                         pt: '1rem',
                         ml: '1rem',
                         alignItems: "center",
                         fontSize: '1rem',
                         fontWeight: 400,
                     }}>No agenda yet.</Typography>
                </TableRow>
              </TableBody>
            </Table>
        </DialogContent>

        <Divider />
       
        <DialogActions>
          <Button 
          sx={{ 
            width: "50%",
            background: "#cd3a12",
              "&:hover": {
                background: "#cd3a12"
              }
            }} autoFocus variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button sx={{width: "50%"}} onClick={handleClose} variant="contained" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    

  );
}