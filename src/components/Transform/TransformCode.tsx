import { Button, Flex, Stack, useClipboard, Text } from '@chakra-ui/react';
import { Transform } from "../../App";
import { useEffect } from "react";

interface Props {
  transformOptions: Transform;
}

const TransformCode = ({ transformOptions }: Props) => {
  const { scale, rotate, translateX, translateY, skewX, skewY } =
    transformOptions;
  const { onCopy, setValue, hasCopied } = useClipboard('');

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

  // Usage in your component
  const transformCode = generateTransformCode();



  useEffect(() => {
    setValue(transformCode);
  }, [transformCode]);

  return (
    <>
      <Flex w={'100%'} justifyContent={'space-between'}>
        <Text fontSize={'2xl'} fontWeight={'bold'} mb={4}>
          CSS Code:
        </Text>
        <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
      </Flex>
      <Stack w={'full'}>
        <pre>{transformCode}</pre>
      </Stack>
    </>
  );
};

export default TransformCode;
