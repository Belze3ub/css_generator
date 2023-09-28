import { HStack, Text } from '@chakra-ui/react'
import SliderInput from './SliderInput'

interface Props {
  blur: number
  setBlur: (blur: number) => void
  spacing: number
}

const BlurChanger = ({blur, setBlur, spacing}: Props) => {
  return (
    <HStack spacing={spacing}>
      <Text>Blur: </Text>
      <SliderInput
        value={blur}
        setValue={setBlur}
        color="yellow"
      />
    </HStack>
  );
}

export default BlurChanger