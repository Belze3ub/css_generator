import { Box } from "@chakra-ui/react";

import './Footer.css'

const Footer = () => {
  return (
    <Box
      bg={'#1f2024'}
      color={'white'}
      display={'grid'}
      placeItems={'center'}
      textAlign={'center'}
      p={'1rem'}
      className="footer"
    >
      <div className="wrapper">
        Created by{' '}
        <a href="https://github.com/Belze3ub" target="_blank" className="link">
          Belze3ub
        </a>{' '}
        | Inspired by{' '}
        <a
          href="https://cssgenerator.pl/box-shadow-generator/"
          className="link"
          target="_blank"
        >
          cssgenerator.pl
        </a>
      </div>
    </Box>
  );
}

export default Footer