import { Box, Flex, Switch, useColorMode, Text } from '@chakra-ui/react';

const Navbar = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  const { toggleColorMode } = useColorMode();
  return (
    <Box bg={'#1f2024'} px={'1rem'} py={'2rem'} color={'white'}>
      <Flex justifyContent={'space-between'} className="wrapper">
        <Text>CSS Generator</Text>
        <Box display={'flex'} alignItems={'center'}>
          <Text>Color mode</Text>
          {/* {colorMode === 'dark' ? 'Light mode' : 'Dark mode'} */}
          <Switch onChange={toggleColorMode} paddingLeft={'.5rem'} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
