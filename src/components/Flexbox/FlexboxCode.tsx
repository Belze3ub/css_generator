import { Button, Flex, Stack, useClipboard, Text } from '@chakra-ui/react';
import { Flexbox } from '../../App';
import { useEffect } from 'react';

interface Props {
  flexboxOptions: Flexbox;
}

const BoxShadowCode = ({ flexboxOptions }: Props) => {
  const {
    display,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
  } = flexboxOptions;

  const { onCopy, setValue, hasCopied } = useClipboard('');
  const flexboxCode = `display: ${display};
flex-direction: ${flexDirection};
flex-wrap: ${flexWrap};
justify-content: ${justifyContent};
align-items: ${alignItems};
align-content: ${alignContent}`;

  useEffect(() => {
    setValue(flexboxCode);
  }, [flexboxCode]);

  return (
    <>
      <Flex w={'100%'} justifyContent={'space-between'}>
        <Text fontSize={'2xl'} fontWeight={'bold'} mb={4}>
          CSS Code:
        </Text>
        <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
      </Flex>
      <Stack w={'full'}>
        <pre>{flexboxCode}</pre>
      </Stack>
    </>
  );
};

export default BoxShadowCode;
