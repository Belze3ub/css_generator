import { HStack, Text } from '@chakra-ui/react';
import SliderInput from './SliderInput';
import { Dimensions } from '../App';

interface Props {
  dimensions: Dimensions;
  setDimensions: (dimensions: Dimensions) => void;
  spacing: number;
  parentWidth: number;
}

const DimensionsChanger = ({
  dimensions,
  setDimensions,
  spacing,
  parentWidth,
}: Props) => {
  return (
    <>
      <HStack spacing={spacing}>
        <Text>Width: </Text>
        <SliderInput
          value={dimensions.width}
          setValue={(value) => {
            if (value <= parentWidth) {
              setDimensions({ ...dimensions, width: value });
            }
          }}
          max={parentWidth}
        />
      </HStack>
      <HStack spacing={spacing}>
        <Text>Height: </Text>
        <SliderInput
          value={dimensions.height}
          setValue={(value) => setDimensions({ ...dimensions, height: value })}
        />
      </HStack>
    </>
  );
};
export default DimensionsChanger;
