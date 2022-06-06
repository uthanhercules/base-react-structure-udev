import React from 'react';
import { Heading, Button } from '@chakra-ui/react';
import { toast } from 'react-toastify';

import './home.style.scss';

function App() {
  const notify = () => toast.success('Notified');

  return (
    <div className='Home'>
      <Heading as='h1'>u.dev_ CRA template</Heading>
      <Button colorScheme='teal' onClick={notify}>
        Notify Me!
      </Button>
    </div>
  );
}

export default App;
