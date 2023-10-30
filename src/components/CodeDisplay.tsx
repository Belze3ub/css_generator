import { Button, Flex, Stack, useClipboard, Text } from '@chakra-ui/react';
import { useEffect } from 'react';

interface Props {
  code: string
}
const CodeDisplay = ({ code }: Props) => {
  const { onCopy, setValue, hasCopied } = useClipboard('');

  useEffect(() => {
    setValue(code);
  }, [code]);

  return (
    <>
      <Flex w={'100%'} justifyContent={'space-between'}>
        <Text fontSize={'2xl'} fontWeight={'bold'} mb={4}>
          CSS Code:
        </Text>
        <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
      </Flex>
      <Stack w={'full'}>
        <pre>{code}</pre>
      </Stack>
    </>
  );
};

export default CodeDisplay;
