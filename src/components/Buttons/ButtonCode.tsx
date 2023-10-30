import { Button, Flex, Stack, useClipboard, Text } from '@chakra-ui/react';
import { Button as ButtonType } from '../../App';
import { useEffect } from 'react';

interface Props {
  buttonOptions: ButtonType;
}
const ButtonCode = ({ buttonOptions }: Props) => {
  const { onCopy, setValue, hasCopied } = useClipboard('');
  const {
    color,
    backgroundColor,
    radius,
    borderColor,
    borderWidth,
    borderStyle,
    paddingX,
    paddingY,
  } = buttonOptions;

  const buttoncode = `background-color: ${backgroundColor};
color: ${color};
border-radius: ${radius}px;
border: ${borderStyle === 'none' ? 'none' : `${borderWidth}px ${borderStyle} ${borderColor};`}
padding: ${paddingY}px ${paddingX}px`;

  useEffect(() => {
    setValue(buttoncode);
  }, [buttoncode]);

  return (
    <>
      <Flex w={'100%'} justifyContent={'space-between'}>
        <Text fontSize={'2xl'} fontWeight={'bold'} mb={4}>
          CSS Code:
        </Text>
        <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
      </Flex>
      <Stack w={'full'}>
        <pre>{buttoncode}</pre>
      </Stack>
    </>
  );
};

export default ButtonCode;
