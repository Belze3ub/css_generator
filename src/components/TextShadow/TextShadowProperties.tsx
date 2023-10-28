import { Flex, HStack, Input, Stack, Text } from '@chakra-ui/react';
import GenericChanger from '../GenericChanger';
import { TextShadow } from '../../App';

interface Props {
  textShadowOptions: TextShadow;
  setTextShadowOptions: (textShadowOption: TextShadow) => void;
}

const TextShadowProperties = ({
  textShadowOptions,
  setTextShadowOptions,
}: Props) => {
  const textShadowProps = [
    {
      label: 'Blur',
      value: textShadowOptions.blur,
      min: 0,
      max: 100,
      setValue: (value: number) =>
        setTextShadowOptions({
          ...textShadowOptions,
          blur: value,
        }),
    },
    {
      label: 'Horizontal',
      value: textShadowOptions.horizontal,
      min: -50,
      max: 50,
      setValue: (value: number) =>
        setTextShadowOptions({
          ...textShadowOptions,
          horizontal: value,
        }),
    },
    {
      label: 'Vertical',
      value: textShadowOptions.vertical,
      min: -50,
      max: 50,
      setValue: (value: number) =>
        setTextShadowOptions({
          ...textShadowOptions,
          vertical: value,
        }),
    },
  ];

  return (
    <>
      <Text fontSize={'2xl'} fontWeight={'bold'}>
        CSS Text-shadow
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
                value={textShadowOptions.color}
                onChange={(e) =>
                  setTextShadowOptions({
                    ...textShadowOptions,
                    color: e.target.value,
                  })
                }
              />
            </Flex>
          </HStack>
          <Input
            placeholder="Text"
            value={textShadowOptions.text}
            onChange={(e) =>
              setTextShadowOptions({
                ...textShadowOptions,
                text: e.target.value,
              })
            }
          />
          {textShadowProps.map((props) => (
            <GenericChanger key={props.label} {...props} />
          ))}
        </Stack>
      </Flex>
    </>
  );
};

export default TextShadowProperties;
