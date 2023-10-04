import {
  Button,
  Card,
  Flex,
  Stack,
  Text,
  useClipboard,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { borderRadius, boxShadow, gradient, textShadow } from '../App';

interface Props {
  boxShadowOptions: boxShadow;
  textShadowOptions: textShadow;
  borderRadiusOptions: borderRadius;
  gradientOptions: gradient;
  selectedOption: string;
}

const CodeDisplay = ({
  boxShadowOptions,
  textShadowOptions,
  borderRadiusOptions,
  gradientOptions,
  selectedOption,
}: Props) => {
  const { radius, inset, horizontal, vertical, blur, spread, color } =
    boxShadowOptions;
  const {
    horizontal: textHorizontal,
    vertical: textVertical,
    blur: textBlur,
    color: textColor,
  } = textShadowOptions;
  const { topLeft, topRight, bottomRight, bottomLeft, unit } =
    borderRadiusOptions;
  const { mode, degree, color1, color1Percentage, color2, color2Percentage } =
    gradientOptions;
  const { onCopy, setValue, hasCopied } = useClipboard('');
  const boxShadowCode = `border-radius: ${radius}px;
box-shadow:${
    inset ? ' inset' : ''
  } ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color};
-webkit-box-shadow:${
    inset ? ' inset' : ''
  } ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color};
-moz-box-shadow:${
    inset ? ' inset' : ''
  } ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color};`;

  const textShadowCode = `text-shadow: ${textHorizontal}px ${textVertical}px ${textBlur}px ${textColor}`;
  const borderRadiusCode = `border-radius: ${topLeft}${unit} ${topRight}${unit} ${bottomRight}${unit} ${bottomLeft}${unit}`;
  const gradientCode = `background: ${mode}-gradient(${
    mode === 'linear' ? `${degree}deg` : 'circle'
  }, ${color1} ${color1Percentage}%, ${color2} ${color2Percentage}%)`;
  useEffect(() => {
    setValue(boxShadowCode);
  }, [boxShadowCode]);
  useEffect(() => {
    setValue(textShadowCode);
  }, [textShadowCode]);
  useEffect(() => {
    setValue(borderRadiusCode);
  }, [borderRadiusCode]);
  useEffect(() => {
    setValue(gradientCode);
  }, [gradientCode]);
  return (
    <Card w={'full'} p={5}>
      <Flex w={'100%'} justifyContent={'space-between'}>
        <Text fontSize={'2xl'} fontWeight={'bold'} mb={4}>
          CSS Code:
        </Text>
        <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
      </Flex>
      <Stack w={'full'}>
        <pre>
          {selectedOption === 'box-shadow'
            ? boxShadowCode
            : selectedOption === 'text-shadow'
            ? textShadowCode
            : selectedOption === 'border-radius'
            ? borderRadiusCode
            : selectedOption === 'gradient'
            ? gradientCode
            : null}
        </pre>
      </Stack>
    </Card>
  );
};

export default CodeDisplay;
