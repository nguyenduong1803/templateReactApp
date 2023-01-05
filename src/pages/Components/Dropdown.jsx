import React from 'react';
import { Box, Container } from '~/layouts/Grid';
import Paper from '~/layouts/Styled/Paper';
import HighligtCode from '../HighligtCode';

const codeString = `
function DrawerPage() {
  const [ drawerActive , setDrawerActive ] = useState(false);
  return (
    <div>
     <Grid container="container-fluid">
        <Col>
        <Drawer setDrawerActive={setDrawerActive} drawerActive={drawerActive}>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </Drawer>
      <Button onClick={()=>{setDrawerActive(true)}}>Show Drawer</Button></Col>
     </Grid>
    </div>
  );
}
`;

function DropdownPage() {
  return (
    <Container>
      clg
      <Box w='20rem'> 1 </Box>
      <Box w='20rem'> 1 </Box>
      <Box w='20rem'> 1 </Box>
      <Box>
        <span>asdfhalkdshadlshfaslpdh</span>{' '}
      </Box>
      <Box> 1 </Box>
      <Box> 1 </Box>
      <Box> 1 </Box>
      <Box> 1 </Box>
      <Box> 1 </Box>
      <Box> 1 </Box>
      <Box> 1 </Box>
      <Box> 1 </Box>
      <Box> 1 </Box>
      <Box> 1 </Box>
      <Box> 1 </Box>
      <Box> 1 </Box>
      <Box> 1 </Box>
      <Box> 1 </Box>
      <Paper className='p-12'>
        <HighligtCode codeString={codeString} />
      </Paper>
    </Container>
  );
}

export default DropdownPage;
