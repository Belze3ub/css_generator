import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  value: number;
  setValue: (value: number) => void;
  color?: string;
  min?: number;
  max?: number;
  unit?: string;
  step?: number;
}

const SliderInput = ({
  value,
  setValue,
  color = 'teal',
  min = -50,
  max = 50,
  unit = 'px',
  step = 1,
}: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Slider
      id="slider"
      value={value}
      min={min}
      max={max}
      step={step}
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
        label={`${value}${unit}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
};

export default SliderInput;
