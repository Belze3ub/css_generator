import { HStack } from '@chakra-ui/react';
import SliderInput from './SliderInput';

interface Props {
  horizontal: number;
  setHorizontal: (horizontal: number) => void;
  spacing: number;
}

const HorizontalChanger = ({ horizontal, setHorizontal, spacing }: Props) => {
  return (
    <HStack spacing={spacing}>
      <Text>Horizontal: </Text>
      <SliderInput value={horizontal} setValue={setHorizontal} color="yellow" />
    </HStack>
  );
}

export default HorizontalChanger