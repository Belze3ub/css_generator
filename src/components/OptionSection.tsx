import { Button, Card, Flex } from '@chakra-ui/react';

interface Props {
  setSelectedOption: (option: string) => void;
}

const OptionSection = ({setSelectedOption}: Props) => {
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
          onClick={() => setSelectedOption('box-shadow')}
        >
          Box shadow
        </Button>
        <Button
          colorScheme="blue"
          variant={'outline'}
          _hover={{ backgroundColor: 'blue.500', color: 'white' }}
          onClick={() => setSelectedOption('text-shadow')}
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