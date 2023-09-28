import { ChakraProvider, Container, Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';
import Canva from './components/Canva';
import PropertiesSection from './components/PropertiesSection';
import CodeDisplay from './components/CodeDisplay';
import theme from './theme';
import OptionSection from './components/OptionSection';

export interface Dimensions {
  width: number;
  height: number;
}

const App = () => {
  const [dimensions, setDimensions] = useState({ width: 100, height: 100 });
  const [radius, setRadius] = useState(0);
  const [color, setColor] = useState('#42445A');
  const [horizontal, setHorizontal] = useState(8);
  const [vertical, setVertical] = useState(8);
  const [spread, setSpread] = useState(0);
  const [blur, setBlur] = useState(24);
  const [inset, setInset] = useState(false);

  // const [boxShadowOptions, setBoxShadowOptions] = useState({
  //   radius: 0,
  //   color: '#42445A',
  //   horizontal: 8,
  //   vertical: 8,
  //   spread: 0,
  //   blur: 24,
  //   inset: false,
  // });
  
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={'90%'}>
        <Grid
          templateAreas={`"header header"
                            "option option"
                            "config canva"
                            "empty code"`}
          gridTemplateRows={`50px .5fr 2fr .5fr`}
          gridTemplateColumns={`1fr 2fr`}
          h="80vh"
        >
          <GridItem></GridItem>
          <GridItem pl="2" area={'option'} p={5}>
              <OptionSection />
          </GridItem>
          <GridItem pl="2" area={'config'} p={5} >
              <PropertiesSection
                radius={radius}
                setRadius={setRadius}
                color={color}
                setColor={setColor}
                spacing={5}
                blur={blur}
                setBlur={setBlur}
                horizontal={horizontal}
                vertical={vertical}
                setHorizontal={setHorizontal}
                setVertical={setVertical}
                spread={spread}
                setSpread={setSpread}
                dimensions={dimensions}
                setDimensions={setDimensions}
                setInset={setInset}
              />
          </GridItem>
          <GridItem pl="2" area={'canva'} p={5}>
              <Canva
                radius={radius}
                height={dimensions.height}
                width={dimensions.width}
                color={color}
                horizontal={horizontal}
                vertical={vertical}
                spread={spread}
                blur={blur}
                inset={inset}
              />
          </GridItem>
          <GridItem pl="2" area={'code'} p={5}>
              <CodeDisplay
                radius={radius}
                color={color}
                horizontal={horizontal}
                vertical={vertical}
                spread={spread}
                blur={blur}
                height={dimensions.height}
                width={dimensions.width}
                inset={inset}
              />
          </GridItem>
        </Grid>
      </Container>
    </ChakraProvider>
  );
};
export default App;
