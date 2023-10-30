import { Flex, Stack, Text } from '@chakra-ui/react';
import GenericChanger from '../GenericChanger';
import { useState } from 'react';

import './GradientProperties.css';
import { Gradient } from '../../interfaces/Gradient';

interface Props {
  gradientOptions: Gradient;
  setGradientOptions: (gradientOptions: Gradient) => void;
}

const GradientProperties = ({ gradientOptions, setGradientOptions }: Props) => {
  const buttons = ['linear', 'radial'];
  const [activeButton, setActiveButton] = useState(buttons[0]);

  const addColor = () => {
    return [...gradientOptions.colors, '#000000'];
  };

  const removeColor = () => {
    return gradientOptions.colors.filter(
      (_, index) => index !== gradientOptions.colors.length - 1
    );
  };

  const handleAddRemove = (newColors: string[]) => {
    const totalColors = newColors.length;
    const newColorPercentages: number[] = Array<number>(totalColors).fill(100);

    const percentage = 100 / (totalColors - 1);
    for (let i = 0; i < totalColors - 1; i++) {
      newColorPercentages[i] = Math.floor(percentage * i);
    }

    setGradientOptions({
      ...gradientOptions,
      colors: newColors,
      colorPercentages: newColorPercentages,
    });
  }

  return (
    <>
      <Text fontSize={'2xl'} fontWeight={'bold'}>
        CSS Gradient
      </Text>
      <Flex
        w={'full'}
        h={'full'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Stack w={'full'}>
          <Flex className='flex'>
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
          </Flex>
          <Stack>
            {gradientOptions.mode === 'linear' && (
              <GenericChanger
                label={'Degree'}
                value={gradientOptions.degree}
                min={0}
                max={180}
                unit={'°'}
                setValue={(value: number) =>
                  setGradientOptions({
                    ...gradientOptions,
                    degree: value,
                  })
                }
              />
            )}
            {gradientOptions.colors.map((_, index) => (
              <div key={index}>
                <Flex justifyContent={'space-between'}>
                  <Text>{`Color ${index + 1}: `}</Text>
                  <input
                    className="colorChanger"
                    type="color"
                    value={gradientOptions.colors[index]}
                    onChange={(e) => {
                      const newColors = [...gradientOptions.colors];
                      newColors[index] = e.target.value;
                      setGradientOptions({
                        ...gradientOptions,
                        colors: newColors,
                      });
                    }}
                  />
                </Flex>
                <GenericChanger
                  key={index}
                  label={`Color ${index + 1} Stop`}
                  value={gradientOptions.colorPercentages[index]}
                  min={0}
                  max={100}
                  unit={'%'}
                  setValue={(value: number) => {
                    const newColorPercentages = [
                      ...gradientOptions.colorPercentages,
                    ];
                    newColorPercentages[index] = value;
                    setGradientOptions({
                      ...gradientOptions,
                      colorPercentages: newColorPercentages,
                    });
                  }}
                />
              </div>
            ))}
          </Stack>
          <Flex className='flex'>
            <button
              className="btn addRemove"
              onClick={() => handleAddRemove(addColor())}
            >
              Add Color
            </button>
            <button
              disabled={gradientOptions.colors.length <= 2}
              className={`btn addRemove ${
                gradientOptions.colors.length <= 2 ? 'disabled' : ''
              }`}
              onClick={() => handleAddRemove(removeColor())}
            >
              Remove Color
            </button>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};

export default GradientProperties;
