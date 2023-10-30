import { Center } from '@chakra-ui/react';
import { TextShadow } from '../../interfaces/TextShadow';

interface Props {
  textShadowOptions: TextShadow;
}

const TextShadowCanva = ({ textShadowOptions }: Props) => {
  const { text, horizontal, vertical, blur, color } = textShadowOptions;
  return (
    <Center h={'full'}>
      <p
        style={{
          fontSize: '34px',
          textShadow: `${horizontal}px ${vertical}px ${blur}px ${color}`,
        }}
      >
        {text}
      </p>
    </Center>
  );
};

export default TextShadowCanva;
