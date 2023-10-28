import {Link} from 'react-router-dom'
import { Card, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

interface ButtonProps {
  name: string;
  endpoint: string;
}

const Navigation = () => {
  const buttons = [
    { name: 'Box shadow', endpoint: '/' },
    { name: 'Text shadow', endpoint: '/text-shadow' },
    { name: 'Flexbox', endpoint: '/flexbox' },
    { name: 'Border radius', endpoint: '/border-radius' },
    { name: 'Gradient', endpoint: '/gradient' },
    { name: 'Transition', endpoint: '/transition' },
    { name: 'Transform', endpoint: '/transform' },
    { name: 'Background', endpoint: '/background' },
    { name: 'Button', endpoint: '/button' },
  ];
  const [activeButton, setActiveButton] = useState<ButtonProps>(buttons[0]);
  return (
    <>
      <Card w={'full'} h={'full'} p={5} overflow={'auto'} className="options" mb={5}>
        <Flex
          h={'full'}
          alignItems={'center'}
          justifyContent={'space-between'}
          gap={'1rem'}
        >
          {buttons.map((button) => (
            <Link key={button.name} to={button.endpoint}>
              <button
                key={button.name}
                className={
                  activeButton.endpoint === button.endpoint ? 'btn active' : 'btn'
                }
                onClick={() => {
                  setActiveButton(button);
                }}
              >
                {button.name}
              </button>
            </Link>
          ))}
        </Flex>
      </Card>
      <Outlet />
    </>
  );
}

export default Navigation