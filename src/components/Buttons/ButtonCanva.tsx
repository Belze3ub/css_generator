import { Center } from '@chakra-ui/react';
import { Button } from '../../App';

interface Props {
  buttonOptions: Button;
}
const ButtonCanva = ({ buttonOptions }: Props) => {
    const {
      color,
      backgroundColor,
      text,
      radius,
      borderColor,
      borderWidth,
      borderStyle,
      paddingX,
      paddingY
    } = buttonOptions;

  return (
    <Center h={'full'}>
      <button
        style={{
          backgroundColor: backgroundColor,
          color: color,
          borderRadius: `${radius}px`,
          border: `${borderWidth}px ${borderStyle} ${borderColor}`,
          padding: `${paddingY}px ${paddingX}px`
        }}
      >
        {text}
      </button>
    </Center>
  );
};

export default ButtonCanva;
