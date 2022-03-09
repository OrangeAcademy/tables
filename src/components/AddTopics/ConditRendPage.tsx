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
import { ReactDOM } from 'react';

import ResponsiveDialog from './AddTopics';
import AddTopicsMobile from './AddTopicsMobile';
import { useState } from 'react';

 function RenderPagePopup() {
      const [width, setWidth] = useState(false);
      const theme = useTheme();
      const hasReachedBp = useMediaQuery(theme.breakpoints.down('sm'));
      const mobileScreen = useMediaQuery(theme.breakpoints.down('xs'));

      return (
          <div>
            {hasReachedBp === true ? <ResponsiveDialog /> : <AddTopicsMobile /> }
         </div> 
      )
  }
export default RenderPagePopup; 





