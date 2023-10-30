import { Flex, Text, Stack } from "@chakra-ui/react";
import GenericChanger from "../GenericChanger";
import { Transform } from "../../interfaces/Transform";

interface Props {
  transformOptions: Transform;
  setTransformOptions: (transformOptions: Transform) => void;
}

const TransformProperties = ({
  transformOptions,
  setTransformOptions,
}: Props) => {

  const {scale, rotate, translateX, translateY, skewX, skewY} = transformOptions;

  const transformProps = [
    {
      label: 'Scale',
      value: scale,
      min: 0.0,
      max: 2,
      unit: '',
      step: .1,
      setValue: (value: number) =>
        setTransformOptions({
          ...transformOptions,
          scale: value,
        }),
    },
    {
      label: 'Rotate',
      value: rotate,
      min: 0,
      max: 360,
      unit: '',
      setValue: (value: number) =>
        setTransformOptions({
          ...transformOptions,
          rotate: value,
        }),
    },
    {
      label: 'Translate X',
      value: translateX,
      min: -100,
      max: 100,
      unit: '',
      setValue: (value: number) =>
        setTransformOptions({
          ...transformOptions,
          translateX: value,
        }),
    },
    {
      label: 'Translate Y',
      value: translateY,
      min: -100,
      max: 100,
      unit: '',
      setValue: (value: number) =>
        setTransformOptions({
          ...transformOptions,
          translateY: value,
        }),
    },
    {
      label: 'Skew X',
      value: skewX,
      min: -100,
      max: 100,
      unit: '',
      setValue: (value: number) =>
        setTransformOptions({
          ...transformOptions,
          skewX: value,
        }),
    },
    {
      label: 'Skew Y',
      value: skewY,
      min: -100,
      max: 100,
      unit: '',
      setValue: (value: number) =>
        setTransformOptions({
          ...transformOptions,
          skewY: value,
        }),
    },
  ];
  
  return (
    <>
      <Text fontSize={'2xl'} fontWeight={'bold'}>
        CSS Transform
      </Text>
      <Flex
        w={'full'}
        h={'full'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Stack w={'full'}>
          {transformProps.map((prop) => (
            <GenericChanger key={prop.label} {...prop} />
          ))}
        </Stack>
      </Flex>
    </>
  );
};

export default TransformProperties