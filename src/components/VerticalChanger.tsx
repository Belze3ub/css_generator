import React from 'react'

interface Props {
  spread: number;
  setSpread: (spread: number) => void;
  spacing: number;
}

const VerticalChanger = () => {
  return (
    <HStack spacing={spacing}>
      <Text>Spread: </Text>
      <SliderInput value={spread} setValue={setSpread} color="yellow" />
    </HStack>
  );
}

export default VerticalChanger