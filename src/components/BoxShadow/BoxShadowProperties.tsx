import { Flex, HStack, Stack, Switch, Text } from '@chakra-ui/react';
import GenericChanger from '../GenericChanger';
import { BoxShadow } from '../../App';

interface Props {
  boxShadowOptions: BoxShadow;
  setBoxShadowOptions: (boxShadowOption: BoxShadow) => void;
}

const BoxShadowProperties = ({
  boxShadowOptions,
  setBoxShadowOptions,
}: Props) => {
  const boxShadowProps = [
    {
      label: 'Blur',
      value: boxShadowOptions.blur,
      min: 0,
      max: 100,
      setValue: (value: number) =>
        setBoxShadowOptions({
          ...boxShadowOptions,
          blur: value,
        }),
    },
    {
      label: 'Spread',
      value: boxShadowOptions.spread,
      min: -50,
      max: 50,
      setValue: (value: number) =>
        setBoxShadowOptions({
          ...boxShadowOptions,
          spread: value,
        }),
    },
    {
      label: 'Horizontal',
      value: boxShadowOptions.horizontal,
      min: -50,
      max: 50,
      setValue: (value: number) =>
        setBoxShadowOptions({
          ...boxShadowOptions,
          horizontal: value,
        }),
    },
    {
      label: 'Vertical',
      value: boxShadowOptions.vertical,
      min: -50,
      max: 50,
      setValue: (value: number) =>
        setBoxShadowOptions({
          ...boxShadowOptions,
          vertical: value,
        }),
    },
  ];

  return (
    <>
      <Text fontSize={'2xl'} fontWeight={'bold'}>
        CSS Box-shadow
      </Text>
      <Flex
        w={'full'}
        h={'full'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Stack w={'full'}>
          <HStack>
            <Flex w={'100%'} justifyContent={'space-between'}>
              <Text>Shadow color: </Text>
              <input
                className="colorChanger"
                type="color"
                value={boxShadowOptions.color}
                onChange={(e) =>
                  setBoxShadowOptions({
                    ...boxShadowOptions,
                    color: e.target.value,
                  })
                }
              />
            </Flex>
          </HStack>
          {boxShadowProps.map((prop) => (
            <GenericChanger key={prop.label} {...prop} />
          ))}
          <HStack>
            <Flex w={'100%'} justifyContent={'space-between'}>
              <Text>Inset </Text>
              <Switch
                onChange={(e) =>
                  setBoxShadowOptions({
                    ...boxShadowOptions,
                    inset: e.target.checked,
                  })
                }
              />
            </Flex>
          </HStack>
        </Stack>
      </Flex>
    </>
  );
};

export default BoxShadowProperties;
