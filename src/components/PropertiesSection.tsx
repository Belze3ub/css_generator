import RadiusChanger from './RadiusChanger';
import DimensionsChanger from './DimensionsChanger';
import ColorChanger from './ColorChanger';
import {
  Card,
  Center,
  Container,
  Flex,
  HStack,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react';
import BlurChanger from './BlurChanger';
import { Dimensions } from '../App';
import SpreadChanger from './SpreadChanger';
import GenericChanger from './GenericChanger';

interface Props {
  radius: number;
  setRadius: (radius: number) => void;
  color: string;
  setColor: (color: string) => void;
  spacing: number;
  parentWidth: number;
  horizontal: number;
  setHorizontal: (horizontal: number) => void;
  vertical: number;
  setVertical: (vertical: number) => void;
  spread: number;
  setSpread: (spread: number) => void
  blur: number
  setBlur: (blur: number) => void
  dimensions: Dimensions;
  setDimensions: (dimensions: Dimensions) => void
  inset: boolean;
  setInset: (inset: boolean) => void
}

const PropertiesSection = ({
  radius,
  setRadius,
  color,
  setColor,
  spacing,
  parentWidth,
  blur,
  setBlur,
  dimensions,
  setDimensions,
  spread,
  setSpread,
  horizontal,
  setHorizontal,
  vertical,
  setVertical,
  inset,
  setInset,
}: Props) => {
  return (
    <Card h={'full'} w={'full'} p={5}>
      <Text fontSize={'2xl'} fontWeight={'bold'}>
        CSS box-shadow
      </Text>
      <Flex
        w={'full'}
        h={'full'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Stack w={'full'}>
          <HStack>
            <Flex w={'100%'} justifyContent={'space-between'}>
              <Text>Shadow color: </Text>
              <input
                className="colorChanger"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </Flex>
          </HStack>
          <GenericChanger
            label="Height"
            value={dimensions.height}
            setValue={(value) =>
              setDimensions({ ...dimensions, height: value })
            }
            spacing={spacing}
            min={0}
            max={200}
          />
          <GenericChanger
            label="Width"
            value={dimensions.width}
            setValue={(value) => setDimensions({ ...dimensions, width: value })}
            spacing={spacing}
            min={0}
            max={200}
          />
          {/* <RadiusChanger
            radius={radius}
            setRadius={setRadius}
            spacing={spacing}
          /> */}
          <GenericChanger
            label="Radius"
            value={radius}
            setValue={setRadius}
            spacing={spacing}
            min={0}
            max={100}
          />
          {/* <BlurChanger blur={blur} setBlur={setBlur} spacing={spacing} /> */}
          <GenericChanger
            label="Blur"
            value={blur}
            setValue={setBlur}
            spacing={spacing}
            min={0}
          />
          <GenericChanger
            label="Spread"
            value={spread}
            setValue={setSpread}
            spacing={spacing}
          />
          <GenericChanger
            label="Horizontal"
            value={horizontal}
            setValue={setHorizontal}
            spacing={spacing}
          />
          <GenericChanger
            label="Vertical"
            value={vertical}
            setValue={setVertical}
            spacing={spacing}
          />
        <HStack>
          <Flex w={'100%'} justifyContent={'space-between'}>
            <Text>Inset </Text>
            <Switch onChange={(e) => setInset(e.target.checked)} />
          </Flex>
        </HStack>
        </Stack>
      </Flex>
    </Card>
  );
};

export default PropertiesSection;
