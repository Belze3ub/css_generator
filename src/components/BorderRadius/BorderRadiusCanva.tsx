import { Center } from '@chakra-ui/react';
import { BorderRadius } from '../../App';

interface Props {
  borderRadiusOptions: BorderRadius;
}

const TextShadowCanva = ({ borderRadiusOptions }: Props) => {
  const { topLeft, topRight, bottomLeft, bottomRight, unit } =
    borderRadiusOptions;
  return (
    <Center h={'full'}>
      <div
        style={{
          width: `200px`,
          height: `200px`,
          backgroundColor: '#CDDAFE',
          border: '2px solid #5983FC',
          borderRadius: `${topLeft}${unit} ${topRight}${unit} ${bottomRight}${unit} ${bottomLeft}${unit}`,
        }}
      ></div>
    </Center>
  );
};

export default TextShadowCanva;
