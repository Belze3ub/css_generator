import { Button, Flex, Stack, useClipboard, Text } from '@chakra-ui/react';
import { BorderRadius } from '../../App';
import { useEffect } from 'react';

interface Props {
  borderRadiusOptions: BorderRadius;
}

const TextShadowCode = ({ borderRadiusOptions}: Props) => {
  const { topLeft, topRight, bottomLeft, bottomRight, unit } =
    borderRadiusOptions;

  const { onCopy, setValue, hasCopied } = useClipboard('');
  const borderRadiusCode = `border-radius: ${topLeft}${unit} ${topRight}${unit} ${bottomRight}${unit} ${bottomLeft}${unit}`;

  useEffect(() => {
    setValue(borderRadiusCode);
  }, [borderRadiusCode]);
  
  return (
    <>
      <Flex w={'100%'} justifyContent={'space-between'}>
        <Text fontSize={'2xl'} fontWeight={'bold'} mb={4}>
          CSS Code:
        </Text>
        <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
      </Flex>
      <Stack w={'full'}>
        <pre>{borderRadiusCode}</pre>
      </Stack>
    </>
  );
};

export default TextShadowCode;
