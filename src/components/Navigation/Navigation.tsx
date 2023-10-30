import { NavLink } from 'react-router-dom';
import { Card, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Navigation = () => {
  const endpoints = [
    { name: 'Box shadow', endpoint: '/' },
    { name: 'Text shadow', endpoint: '/text-shadow' },
    { name: 'Flexbox', endpoint: '/flexbox' },
    { name: 'Border radius', endpoint: '/border-radius' },
    { name: 'Gradient', endpoint: '/gradient' },
    { name: 'Transform', endpoint: '/transform' },
    { name: 'Button', endpoint: '/button' },
  ];

  return (
    <div className='main wrapper'>
      <Card
        p={5}
        overflow={'auto'}
        mb={5}
        className='nav'
      >
        <div>
          <Flex
          h={'full'}
          alignItems={'center'}
          justifyContent={'space-between'}
          gap={'1rem'}
        >
          {endpoints.map((endpoint) => (
            <NavLink
              key={endpoint.name}
              to={endpoint.endpoint}
              className={({ isActive }) => (isActive ? 'btn active' : 'btn')}
            >
              <button key={endpoint.name}>{endpoint.name}</button>
            </NavLink>
          ))}
        </Flex>
        </div>
      </Card>
      <Outlet />
    </div>
  );
};

export default Navigation;
