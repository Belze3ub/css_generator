import { Button, Flex, Stack, useClipboard, Text } from '@chakra-ui/react';
import { Gradient } from '../../App';
import { useEffect } from 'react';

interface Props {
  gradientOptions: Gradient;
}

const GradientCode = ({ gradientOptions }: Props) => {
  const { mode, colors, colorPercentages, degree } = gradientOptions;

  const { onCopy, setValue, hasCopied } = useClipboard('');
  const gradientColorStops = colors
    .map((color, index) => `${color} ${colorPercentages[index]}%`)
    .join(', ');
  const gradientCode = `background: ${mode}-gradient(${
    mode === 'linear' ? `${degree}deg` : 'circle'
  }, ${gradientColorStops})`;

  useEffect(() => {
    setValue(gradientCode);
  }, [gradientCode]);

  return (
    <>
      <Flex w={'100%'} justifyContent={'space-between'}>
        <Text fontSize={'2xl'} fontWeight={'bold'} mb={4}>
          CSS Code:
        </Text>
        <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
      </Flex>
      <Stack w={'full'}>
        <pre>{gradientCode}</pre>
      </Stack>
    </>
  );
};

export default GradientCode;
