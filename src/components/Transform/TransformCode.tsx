import { Transform } from '../../interfaces/Transform';
import CodeDisplay from '../CodeDisplay';

interface Props {
  transformOptions: Transform;
}

const TransformCode = ({ transformOptions }: Props) => {
  const { scale, rotate, translateX, translateY, skewX, skewY } =
    transformOptions;

  const generateTransformCode = () => {
    const transformValues = [];

    if (scale !== 1) {
      transformValues.push(`scale(${scale})`);
    }
    if (rotate !== 0) {
      transformValues.push(`rotate(${rotate}deg)`);
    }
    if (translateX !== 0 || translateY !== 0) {
      transformValues.push(`translate(${translateX}px, ${translateY}px)`);
    }
    if (skewX !== 0 || skewY !== 0) {
      transformValues.push(`skew(${skewX}deg, ${skewY}deg)`);
    }

    return transformValues.length > 0
      ? `transform: ${transformValues.join(' ')}`
      : 'transform: none';
  };

  const transformCode = generateTransformCode();

  return <CodeDisplay code={transformCode} />;
};

export default TransformCode;
