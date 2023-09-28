import { HStack, Text } from '@chakra-ui/react';
import SliderInput from './SliderInput';

interface Props {
  spacing: number;
  distance: number;
  setDistance: (distance: number) => void;
}

const DistanceChanger = ({spacing, distance, setDistance}: Props) => {
  return (
    <HStack spacing={spacing}>
      <Text>Distance: </Text>
      <SliderInput
        value={distance}
        setValue={setDistance}
        color="green"
      />
    </HStack>
  );
}

export default DistanceChanger