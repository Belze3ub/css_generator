import {
  Button,
  Card,
  Flex,
  HStack,
  Input,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react';
import { borderRadius, boxShadow, gradient, textShadow } from './Display';
import GenericChanger from './GenericChanger';
import { useState } from 'react';

interface Props {
  selectedOption: string;
  boxShadowOptions: boxShadow;
  setBoxShadowOptions: (boxShadowOption: boxShadow) => void;
  textShadowOptions: textShadow;
  setTextShadowOptions: (textShadowOption: textShadow) => void;
  borderRadiusOptions: borderRadius;
  setBorderRadiusOptions: (borderRadiusOptions: borderRadius) => void;
  gradientOptions: gradient;
  setGradientOptions: (gradientOptions: gradient) => void;
  spacing: number;
}

const PropertiesSection = ({
  selectedOption,
  boxShadowOptions,
  setBoxShadowOptions,
  textShadowOptions,
  setTextShadowOptions,
  borderRadiusOptions,
  setBorderRadiusOptions,
  gradientOptions,
  setGradientOptions,
  spacing,
}: Props) => {
  const buttons = ['linear', 'radial']
  const [activeButton, setActiveButton] = useState(buttons[0]);
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
      case 'border-radius':
        return [
          {
            label: 'Top left',
            value:
              borderRadiusOptions.unit === '%' &&
              borderRadiusOptions.topLeft > 100
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
              borderRadiusOptions.unit === '%' &&
              borderRadiusOptions.topRight > 100
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
              borderRadiusOptions.unit === '%' &&
              borderRadiusOptions.bottomLeft > 100
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
      case 'gradient':
        return [
          {
            label: 'Color 1 Percentage',
            value: gradientOptions.color1Percentage,
            min: 0,
            max: 100,
            unit: '%',
            setValue: (value: number) =>
              setGradientOptions({
                ...gradientOptions,
                color1Percentage: value,
              }),
          },
          {
            label: 'Color 2 Percentage',
            value: gradientOptions.color2Percentage,
            min: 0,
            max: 100,
            unit: '%',
            setValue: (value: number) =>
              setGradientOptions({
                ...gradientOptions,
                color2Percentage: value,
              }),
          },
        ];
      default:
        return [];
    }
  };

  const genericChangersProps = getGenericChangersProps(selectedOption);

  return (
    <Card h={'20rem'} w={'full'} p={5}>
      <Text fontSize={'2xl'} fontWeight={'bold'}>
        {`CSS ${selectedOption[0].toUpperCase() + selectedOption.slice(1)}`}
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
              {textShadowProps.map((props) => (
                <GenericChanger
                  key={props.label}
                  {...props}
                  spacing={spacing}
                />
              ))}
            </>
          )}
          {selectedOption === 'border-radius' && (
            <>
              <Stack>
                <HStack>
                  <Button
                    onClick={() =>
                      setBorderRadiusOptions({
                        ...borderRadiusOptions,
                        unit: 'px',
                      })
                    }
                  >
                    Pixels
                  </Button>
                  <Button
                    onClick={() =>
                      setBorderRadiusOptions({
                        ...borderRadiusOptions,
                        unit: '%',
                      })
                    }
                  >
                    Percents
                  </Button>
                </HStack>
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
          {selectedOption === 'gradient' && (
            <>
              <Stack>
                <HStack>
                  {buttons.map((button) => (
                    <button
                      className={activeButton === button ? 'btn active' : 'btn'}
                      key={button}
                      onClick={() => {
                        setGradientOptions({
                          ...gradientOptions,
                          mode: button,
                        });
                        setActiveButton(button);
                      }}
                    >
                      {button[0].toUpperCase() + button.slice(1)}
                    </button>
                  ))}
                  {/* <Button
                    onClick={() =>
                      setGradientOptions({
                        ...gradientOptions,
                        mode: 'linear',
                      })
                    }
                  >
                    Linear
                  </Button>
                  <Button
                    onClick={() =>
                      setGradientOptions({
                        ...gradientOptions,
                        mode: 'radial',
                      })
                    }
                  >
                    Radial
                  </Button> */}
                </HStack>
              </Stack>

              <Stack>
                <Flex justifyContent={'space-between'}>
                  <Text>Color 1: </Text>
                  <input
                    className="colorChanger"
                    type="color"
                    value={gradientOptions.color1}
                    onChange={(e) =>
                      setGradientOptions({
                        ...gradientOptions,
                        color1: e.target.value,
                      })
                    }
                  />
                </Flex>
                {gradientOptions.mode === 'linear' && (
                  <GenericChanger
                    label={'Degree'}
                    value={gradientOptions.degree}
                    min={0}
                    max={180}
                    unit={'°'}
                    spacing={spacing}
                    setValue={(value: number) =>
                      setGradientOptions({
                        ...gradientOptions,
                        degree: value,
                      })
                    }
                  />
                )}
                <GenericChanger
                  label={'Color 1 Percentage'}
                  value={gradientOptions.color1Percentage}
                  min={0}
                  max={100}
                  unit={'%'}
                  spacing={spacing}
                  setValue={(value: number) =>
                    setGradientOptions({
                      ...gradientOptions,
                      color1Percentage: value,
                    })
                  }
                />
                <Flex justifyContent={'space-between'}>
                  <Text>Color 2: </Text>
                  <input
                    className="colorChanger"
                    type="color"
                    value={gradientOptions.color2}
                    onChange={(e) =>
                      setGradientOptions({
                        ...gradientOptions,
                        color2: e.target.value,
                      })
                    }
                  />
                </Flex>
                <GenericChanger
                  label={'Color 2 Percentage'}
                  value={gradientOptions.color2Percentage}
                  min={0}
                  max={100}
                  unit={'%'}
                  spacing={spacing}
                  setValue={(value: number) =>
                    setGradientOptions({
                      ...gradientOptions,
                      color2Percentage: value,
                    })
                  }
                />
              </Stack>

              {/* {genericChangersProps.map((props) => (
                <GenericChanger
                  key={props.label}
                  {...props}
                  spacing={spacing}
                />
              ))} */}
            </>
          )}
        </Stack>
      </Flex>
    </Card>
  );
};

export default PropertiesSection;
