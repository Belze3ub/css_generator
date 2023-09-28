import { HStack, Text } from '@chakra-ui/react';
import SliderInput from './SliderInput';

interface Props {
  radius: number;
  setRadius: (radius: number) => void;
  spacing: number
}

const RadiusChanger = ({
  radius,
  setRadius,
  spacing
}: Props) => {
  return (
    <>
      <HStack spacing={spacing}>
        <Text>Radius: </Text>
        <SliderInput
          value={radius}
          setValue={setRadius}
          color="red"
        />
      </HStack>
    </>
  );
};
export default RadiusChanger;
