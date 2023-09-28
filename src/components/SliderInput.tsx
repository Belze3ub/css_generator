import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  value: number,
  setValue: (value: number) => void
  color?: string,
  min?: number
  max?: number
}

const SliderInput = ({value, setValue, color = 'teal', min = -50, max = 50} : Props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Slider
      id="slider"
      defaultValue={value}
    min={min}
      max={max}
      colorScheme={color}
      onChange={(e: number) => setValue(e)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      w={'80%'}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg={`${color}.500`}
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`${value}px`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
};

export default SliderInput;
