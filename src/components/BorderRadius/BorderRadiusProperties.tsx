import { Flex, HStack, Stack, Text } from '@chakra-ui/react';
import GenericChanger from '../GenericChanger';
import { useState } from 'react';
import { BorderRadius } from '../../interfaces/BorderRadius';

interface Props {
  borderRadiusOptions: BorderRadius;
  setBorderRadiusOptions: (borderRadiusOptions: BorderRadius) => void;
}

interface UnitButtonProps {
  name: string;
  unit: string;
}

const BorderRadiusProperties = ({
  borderRadiusOptions,
  setBorderRadiusOptions,
}: Props) => {
  const buttons = [
    { name: 'Pixels', unit: 'px' },
    { name: 'Percents', unit: '%' },
  ];

  const [activeButton, setActiveButton] = useState<UnitButtonProps>(buttons[0]);

  const borderRadiusProps = [
    {
      label: 'Top left',
      value:
        borderRadiusOptions.unit === '%' && borderRadiusOptions.topLeft > 100
          ? (borderRadiusOptions.topLeft = 100)
          : borderRadiusOptions.topLeft,
      min: 0,
      max: borderRadiusOptions.unit === 'px' ? 150 : 100,
      unit: borderRadiusOptions.unit,
      setValue: (value: number) =>
        setBorderRadiusOptions({
          ...borderRadiusOptions,
          topLeft: value,
        }),
    },
    {
      label: 'Top right',
      value:
        borderRadiusOptions.unit === '%' && borderRadiusOptions.topRight > 100
          ? (borderRadiusOptions.topRight = 100)
          : borderRadiusOptions.topRight,
      min: 0,
      max: borderRadiusOptions.unit === 'px' ? 150 : 100,
      unit: borderRadiusOptions.unit,
      setValue: (value: number) =>
        setBorderRadiusOptions({
          ...borderRadiusOptions,
          topRight: value,
        }),
    },
    {
      label: 'Bottom right',
      value:
        borderRadiusOptions.unit === '%' &&
        borderRadiusOptions.bottomRight > 100
          ? (borderRadiusOptions.bottomRight = 100)
          : borderRadiusOptions.bottomRight,
      min: 0,
      max: borderRadiusOptions.unit === 'px' ? 150 : 100,
      unit: borderRadiusOptions.unit,
      setValue: (value: number) =>
        setBorderRadiusOptions({
          ...borderRadiusOptions,
          bottomRight: value,
        }),
    },
    {
      label: 'Bottom left',
      value:
        borderRadiusOptions.unit === '%' && borderRadiusOptions.bottomLeft > 100
          ? (borderRadiusOptions.bottomLeft = 100)
          : borderRadiusOptions.bottomLeft,
      min: 0,
      max: borderRadiusOptions.unit === 'px' ? 150 : 100,
      unit: borderRadiusOptions.unit,
      setValue: (value: number) =>
        setBorderRadiusOptions({
          ...borderRadiusOptions,
          bottomLeft: value,
        }),
    },
  ];

  return (
    <>
      <Text fontSize={'2xl'} fontWeight={'bold'}>
        CSS Border-radius
      </Text>
      <Flex
        w={'full'}
        h={'full'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Stack w={'full'}>
          <HStack>
            {buttons.map((button) => (
              <button key={button.name}
                className={`btn${activeButton.name === button.name ? ' active' : ''}`}
                onClick={() => {
                  setBorderRadiusOptions({
                    ...borderRadiusOptions,
                    unit: button.unit,
                  });
                  setActiveButton(button);
                }}
              >
                {button.name}
              </button>
            ))}
          </HStack>
          {borderRadiusProps.map((props) => (
            <GenericChanger key={props.label} {...props} />
          ))}
        </Stack>
      </Flex>
    </>
  );
};

export default BorderRadiusProperties;
