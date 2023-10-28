import { Button, Flex, Stack, useClipboard, Text } from '@chakra-ui/react';
import { BoxShadow } from '../../App';
import { useEffect } from 'react';

interface Props {
  boxShadowOptions: BoxShadow;
}

const BoxShadowCode = ({ boxShadowOptions }: Props) => {
  const { inset, horizontal, vertical, blur, spread, color } = boxShadowOptions;

  const { onCopy, setValue, hasCopied } = useClipboard('');
  const boxShadowCode = `box-shadow:${
    inset ? ' inset' : ''
  } ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color};
-webkit-box-shadow:${
    inset ? ' inset' : ''
  } ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color};
-moz-box-shadow:${
    inset ? ' inset' : ''
  } ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color};`;

  useEffect(() => {
    setValue(boxShadowCode);
  }, [boxShadowCode]);

  return (
    <>
      <Flex w={'100%'} justifyContent={'space-between'}>
        <Text fontSize={'2xl'} fontWeight={'bold'} mb={4}>
          CSS Code:
        </Text>
        <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
      </Flex>
      <Stack w={'full'}>
        <pre>{boxShadowCode}</pre>
      </Stack>
    </>
  );
};

export default BoxShadowCode;
