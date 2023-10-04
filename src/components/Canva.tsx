import { Card, Center } from '@chakra-ui/react';
import { borderRadius, boxShadow, gradient, textShadow } from '../App';

interface Props {
  boxShadowOptions: boxShadow;
  textShadowOptions: textShadow;
  borderRadiusOptions: borderRadius;
  gradientOptions: gradient;
  selectedOption: string;
}

const Canva = ({
  boxShadowOptions,
  textShadowOptions,
  borderRadiusOptions,
  gradientOptions,
  selectedOption,
}: Props) => {
  const { radius, inset, horizontal, vertical, blur, spread, color } =
    boxShadowOptions;
  const {
    text,
    horizontal: textHorizontal,
    vertical: textVertical,
    blur: textBlur,
    color: textColor,
  } = textShadowOptions;
  const { topLeft, topRight, bottomRight, bottomLeft, unit } = borderRadiusOptions;
  const { mode, degree, color1, color1Percentage, color2, color2Percentage } = gradientOptions;
  return (
    <Card w={'full'} h={{ base: '20rem', lg: 'full' }} className="card" p={5}>
      <Center w={'full'} h={'full'}>
        {selectedOption === 'box-shadow' ? (
          <div
            style={{
              width: `200px`,
              height: `200px`,
              backgroundColor: '#F5F5F5',
              borderRadius: `${radius}px`,
              boxShadow: `${
                inset ? 'inset' : ''
              } ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`,
            }}
          ></div>
        ) : selectedOption === 'text-shadow' ? (
          <p
            style={{
              fontSize: '34px',
              textShadow: `${textHorizontal}px ${textVertical}px ${textBlur}px ${textColor}`,
            }}
          >
            {text}
          </p>
        ) : selectedOption === 'border-radius' ? (
          <div
            style={{
              width: `200px`,
              height: `200px`,
              backgroundColor: '#CDDAFE',
              border: '2px solid #5983FC',
              borderRadius: `${topLeft}${unit} ${topRight}${unit} ${bottomRight}${unit} ${bottomLeft}${unit}`,
            }}
          ></div>
        ) : selectedOption === 'gradient' ? (
          <div
            style={{
              width: `100%`,
              height: `100%`,
              background: `${mode}-gradient(${
                mode === 'linear' ? `${degree}deg` : 'circle'
              }, ${color1} ${color1Percentage}%, ${color2} ${color2Percentage}%)`,
              // backgroundColor: '#5983FC',
              // background: 'linear-gradient(30deg, #5983FC, #ffffff)',
              borderRadius: '5px',
            }}
          ></div>
        ) : null}
      </Center>
    </Card>
  );
};
export default Canva;