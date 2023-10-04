import {
  Button,
  Card,
  Flex,
  Stack,
  Text,
  useClipboard,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { boxShadow, textShadow } from '../App';

interface Props {
  boxShadowOptions: boxShadow;
  textShadowOptions: textShadow;
  selectedOption: string;
}

const CodeDisplay = ({
  boxShadowOptions,
  textShadowOptions,
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
  useEffect(() => {
    setValue(boxShadowCode);
  }, [boxShadowCode]);
  useEffect(() => {
    setValue(textShadowCode);
  }, [textShadowCode]);
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
            : null}
        </pre>
      </Stack>
    </Card>
  );
};

export default CodeDisplay;
