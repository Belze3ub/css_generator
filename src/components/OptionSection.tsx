import { Card, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import {Link, Outlet} from 'react-router-dom'

interface Props {
  setSelectedOption: (option: string) => void;
}

interface ButtonProps {
  name: string;
  option: string;
}

const OptionSection = ({ setSelectedOption }: Props) => {
  const buttons = [
    { name: 'Box shadow', option: 'box-shadow' },
    { name: 'Text shadow', option: 'text-shadow' },
    { name: 'Flexbox', option: 'flexbox' },
    { name: 'Border radius', option: 'border-radius' },
    { name: 'Gradient', option: 'gradient' },
    { name: 'Transition', option: 'transition' },
    { name: 'Transform', option: 'transform' },
    { name: 'Background', option: 'background' },
    { name: 'Button', option: 'button' },
  ];
  const [activeButton, setActiveButton] = useState<ButtonProps>(buttons[0]);

  return (
    <>
        <Card w={'full'} h={'full'} p={5} overflow={'auto'} className='options'>
          <Flex
            h={'full'}
            alignItems={'center'}
            justifyContent={'space-between'}
            gap={'1rem'}
          >
            {buttons.map((button) => (
              <Link key={button.name} to={button.option}>
                <button
                  key={button.name}
                  className={
                    activeButton.option === button.option ? 'btn active' : 'btn'
                  }
                  onClick={() => {
                    setSelectedOption(button.option);
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
};

export default OptionSection;
