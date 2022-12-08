import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Animation, Container } from './Load.styled';

export const Load = () => {
  return (
    <>
      <Container>
        <Animation>
          <RestartAltIcon fontSize="large" /* color="disabled" */ />
        </Animation>
        <h1>Load...</h1>
      </Container>
    </>
  );
};
