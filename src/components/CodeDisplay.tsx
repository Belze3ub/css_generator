import {
  Button,
  Card,
  Flex,
  Stack,
  Text,
  useClipboard,
} from '@chakra-ui/react';
import { useEffect } from 'react';

interface Props {
  radius: number;
  color: string;
  horizontal: number;
  vertical: number;
  spread: number;
  blur: number;
  height: number;
  width: number;
  inset: boolean
}

const CodeDisplay = ({
  radius,
  horizontal,
  vertical,
  spread,
  color,
  blur,
  height,
  width,
  inset,
}: Props) => {
  const { onCopy, setValue, hasCopied } = useClipboard('');
  const textToCopy = `height: ${height}px;
width: ${width}px;
border-radius: ${radius}px;
box-shadow:${inset ? ' inset' : ''} ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color};
-webkit-box-shadow:${inset ? ' inset' : ''} ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color};
-moz-box-shadow:${inset ? ' inset' : ''} ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color};`;
  useEffect(() => {
    setValue(textToCopy);
  }, [textToCopy]);
  return (
    <Card w={'full'} p={5}>
      <Flex w={'100%'} justifyContent={'space-between'}>
        <Text fontSize={'2xl'} fontWeight={'bold'} mb={4}>
          CSS Code:
        </Text>
        <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
      </Flex>
      <Stack w={'full'}>
        <pre>{textToCopy}</pre>
      </Stack>
    </Card>
  );
};

export default CodeDisplay;
