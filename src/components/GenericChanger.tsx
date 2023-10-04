import { Flex, HStack, Text } from '@chakra-ui/react';
import SliderInput from './SliderInput';

interface Props {
  value: number;
  setValue: (value: number) => void;
  spacing: number;
  min?: number,
  max?: number,
  label: string,
  unit?: string,
}

const GenericChanger = ({ value, setValue, spacing, min, max, label, unit }: Props) => {
  return (
    <HStack spacing={spacing}>
      <Flex w={'100%'} justifyContent={'space-between'}>
        <Text marginRight={2}>{label} </Text>
        <SliderInput
          value={value}
          setValue={setValue}
          color="blue"
          min={min}
          max={max}
          unit={unit}
        />
      </Flex>
    </HStack>
  );
};

export default GenericChanger;
