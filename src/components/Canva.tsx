import { Card, Center } from '@chakra-ui/react';

interface Props {
  radius: number;
  width: number;
  height: number;
  color: string;
  horizontal: number;
  vertical: number;
  spread: number;
  blur: number;
  inset: boolean
}

const Canva = ({
  radius,
  width,
  height,
  color,
  horizontal,
  vertical,
  spread,
  blur,
  inset,
}: Props) => {
  return (
    <Card w={'full'} h={'full'}>
      <Center w={'full'} h={'full'}>
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: '#F5F5F5',
            borderRadius: `${radius}px`,
            boxShadow: `${inset ? 'inset' : ''} ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`,
          }}
        ></div>
      </Center>
    </Card>
  );
};
export default Canva;
