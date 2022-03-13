
import { Button, DialogTitle, Box, IconButton, TableCell, Typography, TableRow, styled } from '@mui/material';
import { Close, Done, AddCircleOutlineOutlined } from '@mui/icons-material';

export const AddTopicBtn = ({ addTopic }: any) => {
  const AddButton = styled(IconButton)({
    color: '#000099',
  });

  return (
    <AddButton onClick={addTopic}>
      <Done />
    </AddButton>
  );
};

interface IRemoveTopicBtnProps {
  handleClearFields: () => void;
}

export const RemoveTopicBtn = ({ handleClearFields }: IRemoveTopicBtnProps) => {
  const RemoveButton = styled(IconButton)({
    color: '#cd3a12',
  });

  return (
    <RemoveButton onClick={handleClearFields}>
      <Close />
    </RemoveButton>
  );
};

export const CircleButton = () => {
  const Btn = styled(IconButton)({
    color: '#000099',
  });

  return (
    <Btn size="large">
      <AddCircleOutlineOutlined fontSize="inherit" />
    </Btn>
  );
};

export const ActionButton = styled(Button)({
  width: '50%',
});

export const HeaderContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  pl: '0.5rem',
  pr: '0.6rem',
});

export const Title = styled(DialogTitle)({
  fontSize: '1.8rem',
  fontWeight: 600,
});

export const NoAgenda = () => {
  const Text = styled('p')({
    display: 'flex',
    margin: '1rem 0 0 0',
    alignItems: 'center',
    fontSize: '1rem',
    fontWeight: 400,
    justifyContent: 'center',
  });

  return (
    <Box>
      <Text>No agenda yet.</Text>
    </Box>
  );
};

interface ITopicUIProps {
  topic: string;
  presenter: string;
  removeTopic: () => void;
  removeActive?: boolean;
}

export const Topic = ({ topic, presenter, removeTopic, removeActive }: ITopicUIProps) => {
  return (
    <TableRow>
      <TableCell>
        {removeActive && <RemoveTopicBtn handleClearFields={removeTopic} /> }
      </TableCell>

      <TableCell>
        <Typography>{topic}</Typography>
      </TableCell>

      <TableCell>
        <Typography>{presenter}</Typography>
      </TableCell>
    </TableRow>
  );
};
