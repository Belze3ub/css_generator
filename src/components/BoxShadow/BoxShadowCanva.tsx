import { Center } from '@chakra-ui/react';
import { BoxShadow } from '../../App';

interface Props {
  boxShadowOptions: BoxShadow;
}

const BoxShadowCanva = ({ boxShadowOptions }: Props) => {
  const { inset, blur, spread, color, horizontal, vertical } = boxShadowOptions;
  return (
    <Center h={'full'}>
      <div
        style={{
          width: `200px`,
          height: `200px`,
          borderRadius: '.5rem',
          backgroundColor: '#F5F5F5',
          boxShadow: `${
            inset ? 'inset' : ''
          } ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`,
        }}
      ></div>
    </Center>
  );
};

export default BoxShadowCanva;
