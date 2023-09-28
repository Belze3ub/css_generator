import { Button, Card, Flex } from '@chakra-ui/react';

const OptionSection = () => {
  return (
    <Card w={'full'} h={'full'} p={5}>
      <Flex
        w={'full'}
        h={'full'}
        justifyContent={'space-around'}
        alignItems={'center'}
      >
        <Button
          colorScheme="blue"
          variant={'outline'}
          _hover={{ backgroundColor: 'blue.500', color: 'white' }}
        >
          Box shadow
        </Button>
        <Button
          colorScheme="blue"
          variant={'outline'}
          _hover={{ backgroundColor: 'blue.500', color: 'white' }}
        >
          Text shadow
        </Button>
        <Button
          colorScheme="blue"
          variant={'outline'}
          _hover={{ backgroundColor: 'blue.500', color: 'white' }}
        >
          Flexbox
        </Button>
        <Button
          colorScheme="blue"
          variant={'outline'}
          _hover={{ backgroundColor: 'blue.500', color: 'white' }}
        >
          Border radius
        </Button>
        <Button
          colorScheme="blue"
          variant={'outline'}
          _hover={{ backgroundColor: 'blue.500', color: 'white' }}
        >
          Gradient
        </Button>
        <Button
          colorScheme="blue"
          variant={'outline'}
          _hover={{ backgroundColor: 'blue.500', color: 'white' }}
        >
          Transition
        </Button>
        <Button
          colorScheme="blue"
          variant={'outline'}
          _hover={{ backgroundColor: 'blue.500', color: 'white' }}
        >
          Transform
        </Button>
        <Button
          colorScheme="blue"
          variant={'outline'}
          _hover={{ backgroundColor: 'blue.500', color: 'white' }}
        >
          Background
        </Button>
        <Button
          colorScheme="blue"
          variant={'outline'}
          _hover={{ backgroundColor: 'blue.500', color: 'white' }}
        >
          Button
        </Button>
      </Flex>
    </Card>
  );
}

export default OptionSection