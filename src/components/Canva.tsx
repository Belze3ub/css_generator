import { Card, Center } from '@chakra-ui/react';
import { boxShadow, textShadow } from '../App';

interface Props {
  boxShadowOptions: boxShadow;
  textShadowOptions: textShadow;
  selectedOption: string;
}

const Canva = ({
  boxShadowOptions,
  textShadowOptions,
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
  return (
    <Card w={'full'} h={'full'} className="card">
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
              fontSize: '24px',
              textShadow: `${textHorizontal}px ${textVertical}px ${textBlur}px ${textColor}`,
            }}
          >
            {text}
          </p>
        ) : null}
      </Center>
    </Card>
  );
};
export default Canva;