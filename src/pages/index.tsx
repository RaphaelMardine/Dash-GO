import {Flex, Input, Button, Stack, FormLabel, FormControl} from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  return (
  <Flex 
  w="100vw"
  h="100vh"
  align="center"
  justify="center"
  >
    <Flex 
    as="form"
    width="100%"
    maxWidth={360}
    bg="gray.800"
    padding="8"
    borderRadius={8}
    flexDir="column"
    >
      <Stack spacing="4">
        
        <Input name="name" type="email" label="email" />
        <Input name="password" type="password" label="Senha" />


 </Stack>
<Button type="submit" mt="6" colorScheme="pink">Entrar</Button>
    </Flex>
  </Flex>
  )
}
