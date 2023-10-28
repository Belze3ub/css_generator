import { Flex, Select, Stack, Text } from '@chakra-ui/react';
import {
  AlignContent,
  AlignItems,
  FlexDirection,
  FlexWrap,
  Flexbox,
  JustifyContent,
} from '../../App';

interface Props {
  flexboxOptions: Flexbox;
  setFlexboxOptions: (flexboxOptions: Flexbox) => void;
}

const FlexboxProperties = ({ flexboxOptions, setFlexboxOptions }: Props) => {
  const addFlexItem = () => {
    const newFlexItems = [
      ...flexboxOptions.flexItems,
      flexboxOptions.flexItems.length + 1,
    ];
    const newFlexboxOptions = {
      ...flexboxOptions,
      flexItems: newFlexItems,
    };
    setFlexboxOptions(newFlexboxOptions);
  };

  const removeFlexItem = () => {
    const newFlexItems = flexboxOptions.flexItems.filter(
      (item, index) => index !== flexboxOptions.flexItems.length - 1
    );
    const newFlexboxOptions = {
      ...flexboxOptions,
      flexItems: [...newFlexItems],
    };
    setFlexboxOptions(newFlexboxOptions);
  };

  return (
    <>
      <Text fontSize={'2xl'} fontWeight={'bold'}>
        CSS Flexbox
      </Text>
      <Flex
        w={'full'}
        h={'full'}
        alignItems={'flex-start'}
        justifyContent={'center'}
      >
        <Stack w={'full'}>
          <Flex w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
            <Text>display: </Text>
            <Select
              width={'40%'}
              value={flexboxOptions.display}
              onChange={(e) => {
                setFlexboxOptions({
                  ...flexboxOptions,
                  display: e.target.value,
                });
              }}
            >
              <option value={'flex'}>flex</option>
              <option value={'inline-flex'}>inline-flex</option>
            </Select>
          </Flex>
          <Flex w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
            <Text>flex-direction: </Text>
            <Select
              width={'40%'}
              value={flexboxOptions.flexDirection}
              onChange={(e) => {
                setFlexboxOptions({
                  ...flexboxOptions,
                  flexDirection: e.target.value as FlexDirection,
                });
              }}
            >
              <option value={'row'}>row</option>
              <option value={'column'}>column</option>
              <option value={'row-reverse'}>row-reverse</option>
              <option value={'column-reverse'}>column-reverse</option>
            </Select>
          </Flex>
          <Flex w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
            <Text>flex-wrap: </Text>
            <Select
              width={'40%'}
              value={flexboxOptions.flexWrap}
              onChange={(e) => {
                setFlexboxOptions({
                  ...flexboxOptions,
                  flexWrap: e.target.value as FlexWrap,
                });
              }}
            >
              <option value={'wrap'}>wrap</option>
              <option value={'nowrap'}>nowrap</option>
              <option value={'wrap-reverse'}>wrap-reverse</option>
            </Select>
          </Flex>
          <Flex w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
            <Text>justify-content: </Text>
            <Select
              width={'40%'}
              value={flexboxOptions.justifyContent}
              onChange={(e) => {
                setFlexboxOptions({
                  ...flexboxOptions,
                  justifyContent: e.target.value as JustifyContent,
                });
              }}
            >
              <option value={'flex-start'}>flex-start</option>
              <option value={'flex-end'}>flex-end</option>
              <option value={'center'}>center</option>
              <option value={'space-between'}>space-between</option>
              <option value={'space-around'}>space-around</option>
            </Select>
          </Flex>
          <Flex w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
            <Text>align-items: </Text>
            <Select
              width={'40%'}
              value={flexboxOptions.alignItems}
              onChange={(e) => {
                setFlexboxOptions({
                  ...flexboxOptions,
                  alignItems: e.target.value as AlignItems,
                });
              }}
            >
              <option value={'flex-start'}>flex-start</option>
              <option value={'flex-end'}>flex-end</option>
              <option value={'center'}>center</option>
              <option value={'baseline'}>baseline</option>
              <option value={'stretch'}>stretch</option>
            </Select>
          </Flex>
          <Flex w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
            <Text>align-content: </Text>
            <Select
              width={'40%'}
              value={flexboxOptions.alignContent}
              onChange={(e) => {
                setFlexboxOptions({
                  ...flexboxOptions,
                  alignContent: e.target.value as AlignContent,
                });
              }}
            >
              <option value={'flex-start'}>flex-start</option>
              <option value={'flex-end'}>flex-end</option>
              <option value={'center'}>center</option>
              <option value={'space-between'}>space-between</option>
              <option value={'space-around'}>space-around</option>
              <option value={'stretch'}>stretch</option>
            </Select>
          </Flex>
          <Flex gap={'.5rem'}>
            <button className="btn addRemove" onClick={addFlexItem}>
              Add Element
            </button>
            <button className="btn addRemove" onClick={removeFlexItem}>
              Remove Element
            </button>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};

export default FlexboxProperties;
