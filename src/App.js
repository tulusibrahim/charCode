import React, { useState } from 'react';
import { ChakraProvider, Flex, Input, useToast } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { MdContentCopy } from 'react-icons/md';

function App() {
  const [input, setInput] = useState('')
  let toast = useToast()

  const copyToken = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      description: "Token copied.",
      status: 'success',
      isClosable: true,
      position: 'bottom-left'
    })
  }

  return (
    <ChakraProvider>
      <Flex minH='100vh' w='100%' alignItems='center' direction='column' fontFamily='Roboto Mono'>
        <Flex h='10vh' w='95%' alignItems='center' justify='space-between'>
          <Flex fontSize='larger' fontWeight='bold' letterSpacing={1}>Character Code</Flex>
          <ColorModeSwitcher />
        </Flex>

        <Flex h='80vh' w='95%' alignItems='center' direction='column'>
          <Flex h='80%' w='100%' alignItems='center' direction='column' justify='center'>
            <Input w='fit-content' variant='flushed' maxLength={1} h='40%' fontSize='6xl' textAlign='center' value={input} onChange={e => setInput(e.target.value)} />
          </Flex>
          {
            input &&
            <Flex h='10vh' w='95%' justify='center' alignItems='center' fontSize='4xl'>
              Code: {input.charCodeAt(0)}&nbsp;
              <MdContentCopy cursor='pointer' onClick={() => copyToken(input.charCodeAt(0))} />
            </Flex>
          }
        </Flex>

        <Flex justify='center' alignItems='center' h='10vh' w='95%'>
          Made by&nbsp;<a href="http://tulusibrahim.vercel.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Tulus Ibrahim</a>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
