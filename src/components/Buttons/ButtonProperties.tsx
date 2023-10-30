import { Flex, HStack, Input, Select, Stack, Text } from '@chakra-ui/react';
import GenericChanger from '../GenericChanger';
import { Button } from '../../interfaces/Button';

interface Props {
  buttonOptions: Button;
  setButtonOptions: (buttonOptions: Button) => void;
}

const ButtonProperties = ({
  buttonOptions,
  setButtonOptions,
}: Props) => {

  const {color, backgroundColor, text, radius, borderColor, borderWidth, borderStyle, paddingX, paddingY} = buttonOptions

  const buttonProps = [
    {
      label: 'Border width',
      value: borderWidth,
      min: 0,
      max: 20,
      setValue: (value: number) =>
        setButtonOptions({
          ...buttonOptions,
          borderWidth: value,
        }),
    },
    {
      label: 'Border radius',
      value: radius,
      min: 0,
      max: 50,
      setValue: (value: number) =>
        setButtonOptions({
          ...buttonOptions,
          radius: value,
        }),
    },
    {
      label: 'Padding X',
      value: paddingX,
      min: 0,
      max: 100,
      setValue: (value: number) =>
        setButtonOptions({
          ...buttonOptions,
          paddingX: value,
        }),
    },
    {
      label: 'Padding Y',
      value: paddingY,
      min: 0,
      max: 100,
      setValue: (value: number) =>
        setButtonOptions({
          ...buttonOptions,
          paddingY: value,
        }),
    },
  ];
  
  return (
    <>
      <Text fontSize={'2xl'} fontWeight={'bold'}>
        CSS Background
      </Text>
      <Flex
        w={'full'}
        h={'full'}
        alignItems={'flex-start'}
        justifyContent={'center'}
      >
        <Stack w={'full'}>
          <HStack>
            <Flex w={'100%'} justifyContent={'space-between'}>
              <Text>Text Color: </Text>
              <input
                className="colorChanger"
                type="color"
                value={color}
                onChange={(e) =>
                  setButtonOptions({
                    ...buttonOptions,
                    color: e.target.value,
                  })
                }
              />
            </Flex>
          </HStack>
          <HStack>
            <Flex w={'100%'} justifyContent={'space-between'}>
              <Text>Background Color: </Text>
              <input
                className="colorChanger"
                type="color"
                value={backgroundColor}
                onChange={(e) =>
                  setButtonOptions({
                    ...buttonOptions,
                    backgroundColor: e.target.value,
                  })
                }
              />
            </Flex>
          </HStack>
          <Input
            placeholder="Text"
            value={text}
            onChange={(e) =>
              setButtonOptions({
                ...buttonOptions,
                text: e.target.value,
              })
            }
          />
          <Flex
            w={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Text>Border style: </Text>
            <Select
              width={'40%'}
              value={borderStyle}
              onChange={(e) => {
                setButtonOptions({
                  ...buttonOptions,
                  borderStyle: e.target.value,
                });
              }}
            >
              <option value={'solid'}>solid</option>
              <option value={'dotted'}>dotted</option>
              <option value={'dashed'}>dashed</option>
              <option value={'none'}>none</option>
            </Select>
          </Flex>
          {borderStyle === 'none' ? null : (
            <HStack>
              <Flex w={'100%'} justifyContent={'space-between'}>
                <Text>Border Color: </Text>
                <input
                  className="colorChanger"
                  type="color"
                  value={borderColor}
                  onChange={(e) =>
                    setButtonOptions({
                      ...buttonOptions,
                      borderColor: e.target.value,
                    })
                  }
                />
              </Flex>
            </HStack>
          )}
          {buttonProps.map((prop) =>
            borderStyle === 'none' ? (
              ''
            ) : (
              <GenericChanger key={prop.label} {...prop} />
            )
          )}
        </Stack>
      </Flex>
    </>
  );
};

export default ButtonProperties;
