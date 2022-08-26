import {
    Box,
    Center,
    Heading,
    Stack,
    useColorModeValue,
    Image,
    Flex,
  } from '@chakra-ui/react';

export const Cards = ({image, title}) => (
    <Center justifyContent="space-around" flexDirection="row" >
      <Box
        maxW={'sm'}
        w={'80%'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        marginBottom="20px"
        overflow={'hidden'}>
        <Box
          h={'50%'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              image
            }
            layout={'fill'}
            boxSize='350px'
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {title}
          </Heading>
        </Stack>
      </Box>
    </Center>
)
