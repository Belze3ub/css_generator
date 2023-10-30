import { Center } from "@chakra-ui/react";
import { Transform } from "../../App";

interface Props {
  transformOptions: Transform;
}

const TransformCanva = ({ transformOptions }: Props) => {

  const { scale, rotate, translateX, translateY, skewX, skewY } =
    transformOptions;
  
  return (
    <Center h={'25rem'}>
      <div className="transform"
        style={{
          width: `200px`,
          height: `200px`,
          borderRadius: '.5rem',
          backgroundColor: '#5983fc',
          transform: `scale(${scale}) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg)`,
          transition: `all .1s linear`,
        }}
      ></div>
    </Center>
  );
};

export default TransformCanva;
