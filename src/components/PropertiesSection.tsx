import {
  Card,
  Flex,
  HStack,
  Input,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react';
import { boxShadow, textShadow } from '../App';
import GenericChanger from './GenericChanger';

interface Props {
  selectedOption: string;
  boxShadowOptions: boxShadow;
  setBoxShadowOptions: (boxShadowOption: boxShadow) => void;
  textShadowOptions: textShadow;
  setTextShadowOptions: (textShadowOption: textShadow) => void;
  spacing: number;
}

const PropertiesSection = ({
  selectedOption,
  boxShadowOptions,
  setBoxShadowOptions,
  textShadowOptions,
  setTextShadowOptions,
  spacing,
}: Props) => {
  const getGenericChangersProps = (selectedOption: string) => {
    switch (selectedOption) {
      case 'box-shadow':
        return [
          {
            label: 'Radius',
            value: boxShadowOptions.radius,
            min: 0,
            max: 100,
            setValue: (value: number) =>
              setBoxShadowOptions({
                ...boxShadowOptions,
                radius: value,
              }),
          },
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
      case 'text-shadow':
        return [
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
      default:
        return [];
    }
  };

  const genericChangersProps = getGenericChangersProps(selectedOption);

  return (
    <Card h={'full'} w={'full'} p={5}>
      <Text fontSize={'2xl'} fontWeight={'bold'}>
        {`CSS ${selectedOption}`}
      </Text>
      <Flex
        w={'full'}
        h={'full'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Stack w={'full'}>
          {selectedOption === 'box-shadow' && (
            <>
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
              {genericChangersProps.map((props) => (
                <GenericChanger
                  key={props.label}
                  {...props}
                  spacing={spacing}
                />
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
            </>
          )}
          {selectedOption === 'text-shadow' && (
            <>
              <Stack>
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
              </Stack>
              {genericChangersProps.map((props) => (
                <GenericChanger
                  key={props.label}
                  {...props}
                  spacing={spacing}
                />
              ))}
            </>
          )}
        </Stack>
      </Flex>
    </Card>
  );
};

export default PropertiesSection;
