import { Switch, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SectionContainer from './components/SectionContainer/SectionContainer';
import BoxShadowProperties from './components/BoxShadow/BoxShadowProperties';
import BoxShadowCanva from './components/BoxShadow/BoxShadowCanva';
import BoxShadowCode from './components/BoxShadow/BoxShadowCode';
import Navigation from './components/Navigation/Navigation';
import TextShadowProperties from './components/TextShadow/TextShadowProperties';
import TextShadowCanva from './components/TextShadow/TextShadowCanva';
import TextShadowCode from './components/TextShadow/TextShadowCode';
import BorderRadiusProperties from './components/BorderRadius/BorderRadiusProperties';
import BorderRadiusCanva from './components/BorderRadius/BorderRadiusCanva';
import BorderRadiusCode from './components/BorderRadius/BorderRadiusCode';
import GradientProperties from './components/Gradient/GradientProperties';
import GradientCanva from './components/Gradient/GradientCanva';
import GradientCode from './components/Gradient/GradientCode';
import FlexboxProperties from './components/Flexbox/FlexboxProperties';
import FlexboxCanva from './components/Flexbox/FlexboxCanva';
import FlexboxCode from './components/Flexbox/FlexboxCode';
import TransformProperties from './components/Transform/TransformProperties';
import TransformCanva from './components/Transform/TransformCanva';
import TransformCode from './components/Transform/TransformCode';
import ButtonProperties from './components/Buttons/ButtonProperties';
import ButtonCanva from './components/Buttons/ButtonCanva';
import ButtonCode from './components/Buttons/ButtonCode';

export interface BoxShadow {
  color: string;
  horizontal: number;
  vertical: number;
  spread: number;
  blur: number;
  inset: boolean;
}

export interface TextShadow {
  text: string;
  horizontal: number;
  vertical: number;
  blur: number;
  color: string;
}

export interface BorderRadius {
  unit: string;
  topLeft: number;
  topRight: number;
  bottomRight: number;
  bottomLeft: number;
}

export interface Gradient {
  mode: string;
  degree: number;
  colors: string[];
  colorPercentages: number[];
}

export interface Transform {
  scale: number;
  rotate: number;
  translateX: number;
  translateY: number;
  skewX: number;
  skewY: number;
}

export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';
export type AlignItems =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch';
export type AlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'stretch';

export interface Flexbox {
  display: string;
  flexDirection: FlexDirection;
  flexWrap: FlexWrap;
  justifyContent: JustifyContent;
  alignItems: AlignItems;
  alignContent: AlignContent;
  flexItems: number[];
}

export interface Button {
  color: string;
  backgroundColor: string;
  text: string;
  radius: number;
  borderColor: string;
  borderWidth: number;
  borderStyle: string;
  paddingX: number;
  paddingY: number;
}

const App = () => {
  const [boxShadowOptions, setBoxShadowOptions] = useState<BoxShadow>({
    color: '#42445A',
    horizontal: 8,
    vertical: 8,
    spread: 0,
    blur: 24,
    inset: false,
  });

  const [textShadowOptions, setTextShadowOptions] = useState<TextShadow>({
    text: 'Text Shadow',
    horizontal: 4,
    vertical: 4,
    blur: 6,
    color: '#42445A',
  });

  const [borderRadiusOptions, setBorderRadiusOptions] = useState<BorderRadius>({
    unit: 'px',
    topLeft: 20,
    topRight: 20,
    bottomRight: 20,
    bottomLeft: 20,
  });

  const [gradientOptions, setGradientOptions] = useState<Gradient>({
    mode: 'linear',
    degree: 90,
    colors: ['#5983FC', '#293556'],
    colorPercentages: [0, 100],
  });

  const [flexboxOptions, setFlexboxOptions] = useState<Flexbox>({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexItems: [1, 2, 3],
  });

  const [transformOptions, setTransformOptions] = useState<Transform>({
    scale: 1,
    rotate: 0,
    translateX: 0,
    translateY: 0,
    skewX: 0,
    skewY: 0,
  });

  const [buttonOptions, setButtonOptions] = useState<Button>({
    color: '#ffffff',
    backgroundColor: '#5983fc',
    text: 'button',
    radius: 10,
    borderColor: '#5983fc',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingX: 16,
    paddingY: 8,
  });

  const { toggleColorMode } = useColorMode();

  return (
    <>
      {
        <div>
          Color Mode: <Switch onChange={toggleColorMode} />
        </div>
      }
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route
            index
            element={
              <SectionContainer
                propertiesComponent={
                  <BoxShadowProperties
                    boxShadowOptions={boxShadowOptions}
                    setBoxShadowOptions={setBoxShadowOptions}
                  />
                }
                canvaComponent={
                  <BoxShadowCanva boxShadowOptions={boxShadowOptions} />
                }
                codeComponent={
                  <BoxShadowCode boxShadowOptions={boxShadowOptions} />
                }
              />
            }
          />
          <Route
            path="/text-shadow"
            element={
              <SectionContainer
                propertiesComponent={
                  <TextShadowProperties
                    textShadowOptions={textShadowOptions}
                    setTextShadowOptions={setTextShadowOptions}
                  />
                }
                canvaComponent={
                  <TextShadowCanva textShadowOptions={textShadowOptions} />
                }
                codeComponent={
                  <TextShadowCode textShadowOptions={textShadowOptions} />
                }
              />
            }
          />
          <Route
            path="/border-radius"
            element={
              <SectionContainer
                propertiesComponent={
                  <BorderRadiusProperties
                    borderRadiusOptions={borderRadiusOptions}
                    setBorderRadiusOptions={setBorderRadiusOptions}
                  />
                }
                canvaComponent={
                  <BorderRadiusCanva
                    borderRadiusOptions={borderRadiusOptions}
                  />
                }
                codeComponent={
                  <BorderRadiusCode borderRadiusOptions={borderRadiusOptions} />
                }
              />
            }
          />
          <Route
            path="/gradient"
            element={
              <SectionContainer
                propertiesComponent={
                  <GradientProperties
                    gradientOptions={gradientOptions}
                    setGradientOptions={setGradientOptions}
                  />
                }
                canvaComponent={
                  <GradientCanva gradientOptions={gradientOptions} />
                }
                codeComponent={
                  <GradientCode gradientOptions={gradientOptions} />
                }
              />
            }
          />
          <Route
            path="/flexbox"
            element={
              <SectionContainer
                propertiesComponent={
                  <FlexboxProperties
                    flexboxOptions={flexboxOptions}
                    setFlexboxOptions={setFlexboxOptions}
                  />
                }
                canvaComponent={
                  <FlexboxCanva flexboxOptions={flexboxOptions} />
                }
                codeComponent={<FlexboxCode flexboxOptions={flexboxOptions} />}
              />
            }
          />
          <Route
            path="/transform"
            element={
              <SectionContainer
                propertiesComponent={
                  <TransformProperties
                    transformOptions={transformOptions}
                    setTransformOptions={setTransformOptions}
                  />
                }
                canvaComponent={
                  <TransformCanva transformOptions={transformOptions} />
                }
                codeComponent={
                  <TransformCode transformOptions={transformOptions} />
                }
              />
            }
          />

          <Route
            path="/button"
            element={
              <SectionContainer
                propertiesComponent={
                  <ButtonProperties
                    buttonOptions={buttonOptions}
                    setButtonOptions={setButtonOptions}
                  />
                }
                canvaComponent={<ButtonCanva buttonOptions={buttonOptions} />}
                codeComponent={<ButtonCode buttonOptions={buttonOptions} />}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
export default App;
