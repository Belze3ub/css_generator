import { HStack, Text } from '@chakra-ui/react';
import SliderInput from './SliderInput';

interface Props {
  spread: number;
  setSpread: (spread: number) => void;
  spacing: number;
}

const SpreadChanger = ({spread, setSpread, spacing} : Props) => {
  return (
    <HStack spacing={spacing}>
      <Text>Spread: </Text>
      <SliderInput
        value={spread}
        setValue={setSpread}
        color="yellow"
      />
    </HStack>
  );
}

export default SpreadChanger