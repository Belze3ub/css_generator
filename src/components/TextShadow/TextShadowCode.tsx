import { Button, Flex, Stack, useClipboard, Text } from '@chakra-ui/react';
import { TextShadow } from '../../App';
import { useEffect } from 'react';

interface Props {
  textShadowOptions: TextShadow;
}

const TextShadowCode = ({ textShadowOptions }: Props) => {
  const { horizontal, vertical, blur, color } = textShadowOptions;

  const { onCopy, setValue, hasCopied } = useClipboard('');
  const textShadowCode = `text-shadow: ${horizontal}px ${vertical}px ${blur}px ${color}`;

  useEffect(() => {
    setValue(textShadowCode);
  }, [textShadowCode]);

  return (
    <>
      <Flex w={'100%'} justifyContent={'space-between'}>
        <Text fontSize={'2xl'} fontWeight={'bold'} mb={4}>
          CSS Code:
        </Text>
        <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
      </Flex>
      <Stack w={'full'}>
        <pre>{textShadowCode}</pre>
      </Stack>
    </>
  );
};

export default TextShadowCode;
