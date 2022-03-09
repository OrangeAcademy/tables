import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Divider, IconButton, Input, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Close, Done } from "@mui/icons-material";
import { Box } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

  export default function AddTopicsMobile() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const hasReachedBp = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    < Box
        sx={{
            padding: '0.8rem 0.8rem',
            [theme.breakpoints.down('sm')]: {
                padding: "0.4rem 0.4rem",
            },
        }} >

    {/*  <Button variant="outlined" onClick={handleClickOpen}>
         Report
    </Button>*/}

    

<Dialog
        fullScreen={hasReachedBp}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title">
            <Box
                  sx={{
                       display: 'flex',
                       justifyContent: 'space-between',
                       alignItems: 'center',
                        padding: '0.3rem',
                    }}>
               <DialogTitle id="responsive-dialog-title" 
                  sx={{
                      fontSize: '1.9rem',
                      fontWeight: 600,
                         [theme.breakpoints.down('sm')]: {
                            fontSize: '1.4rem',
                           },
                      }}
                    >Add topics</DialogTitle>
                <IconButton aria-label="delete" sx={{ color: "#000099" }} size="large"  >
                  	<AddCircleOutlineIcon fontSize="inherit" />
               </IconButton>
            </Box>
        <DialogContent
                 sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0.6rem 0.6rem',
                  }}>
                <Table stickyHeader={true}>
                  <TableHead>
                    <TableRow>
                     <TableCell
                       sx={{
                         fontSize: '1.3rem',
                         [theme.breakpoints.down('sm')]: {
                         fontSize: '0.9rem',
                         pl: '0.5rem'
                         }, 
                       }}>
                         Topic</TableCell>
                     <TableCell>
                         <Input placeholder='Topic'/>
                     </TableCell> 
                  </TableRow>
                 </TableHead>
            <TableBody>
                 <TableRow>
                     <TableCell
                        sx={{
                           fontSize: '1.3rem',
                              [theme.breakpoints.down('sm')]: {
                                fontSize: '0.9rem',
                                pl: '0.5rem'
                        }, 
                    }}>
                      Presenter</TableCell>
                     <TableCell>
                         <Input placeholder='Presenter'/>
                     </TableCell>
                  </TableRow>

                  <TableRow>
                     <TableCell
                         sx={{
                            fontSize: '1.3rem',
                            [theme.breakpoints.down('sm')]: {
                            fontSize: '0.9rem',
                            pl: '0.5rem'
                        }, 
                    }}>
                      Edit/Remove</TableCell>
                     <TableCell 
                         sx={{
                           display: 'flex',
                           justifyContent: 'space-around',
                         }}>
                        <IconButton> <Done sx={{color: '#000099'}}/></IconButton>
                        <IconButton> <Close sx={{color: '#cd3a12'}}/></IconButton>
                     </TableCell>
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
                         },
                        [theme.breakpoints.down('sm')]: {
                         width: '50%',
                         },
                        }} autoFocus variant="contained" onClick={handleClose}>
                     Cancel
                    </Button>
                     <Button 
                         sx={{
                            width: "50%",
                             [theme.breakpoints.down('sm')]: {
                             width: '50%',
                            },
                            }} onClick={handleClose} variant="contained" autoFocus>
                             Confirm
                     </Button>
              </DialogActions>
      </Dialog>        

    </Box>
  );
}
