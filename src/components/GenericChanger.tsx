import { Flex, HStack, Text } from '@chakra-ui/react';
import SliderInput from './SliderInput';

interface Props {
  value: number;
  setValue: (value: number) => void;
  min?: number;
  max?: number;
  label: string;
  unit?: string;
  step?: number;
}

const GenericChanger = ({ value, setValue, min, max, label, unit, step }: Props) => {
  return (
    <HStack spacing={10}>
      <Flex w={'100%'} justifyContent={'space-between'}>
        <Text marginRight={2}>{label} </Text>
        <SliderInput
          value={value}
          setValue={setValue}
          color="blue"
          min={min}
          max={max}
          unit={unit}
          step={step}
        />
      </Flex>
    </HStack>
  );
};

export default GenericChanger;
