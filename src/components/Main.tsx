import { Route, Routes } from "react-router-dom";
import SectionContainer from "./SectionContainer/SectionContainer";
import BoxShadowProperties from "./BoxShadow/BoxShadowProperties";
import BoxShadowCanva from "./BoxShadow/BoxShadowCanva";
import BoxShadowCode from "./BoxShadow/BoxShadowCode";
import TextShadowProperties from "./TextShadow/TextShadowProperties";
import TextShadowCanva from "./TextShadow/TextShadowCanva";
import TextShadowCode from './TextShadow/TextShadowCode';
import BorderRadiusProperties from './BorderRadius/BorderRadiusProperties';
import BorderRadiusCanva from './BorderRadius/BorderRadiusCanva';
import BorderRadiusCode from './BorderRadius/BorderRadiusCode';
import GradientProperties from './Gradient/GradientProperties';
import GradientCanva from './Gradient/GradientCanva';
import GradientCode from './Gradient/GradientCode';
import FlexboxProperties from './Flexbox/FlexboxProperties';
import FlexboxCanva from './Flexbox/FlexboxCanva';
import FlexboxCode from './Flexbox/FlexboxCode';
import TransformProperties from './Transform/TransformProperties';
import TransformCanva from './Transform/TransformCanva';
import TransformCode from './Transform/TransformCode';
import ButtonProperties from './Buttons/ButtonProperties';
import ButtonCanva from './Buttons/ButtonCanva';
import ButtonCode from './Buttons/ButtonCode';
import Navigation from "./Navigation/Navigation";
import { useState } from "react";
import { BoxShadow } from "../interfaces/BoxShadow";
import { TextShadow } from "../interfaces/TextShadow";
import { BorderRadius } from "../interfaces/BorderRadius";
import { Gradient } from "../interfaces/Gradient";
import { Flexbox } from "../interfaces/Flexbox";
import { Transform } from "../interfaces/Transform";
import { Button } from '../interfaces/Button';

const Main = () => {
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
  return (
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
                <BorderRadiusCanva borderRadiusOptions={borderRadiusOptions} />
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
              codeComponent={<GradientCode gradientOptions={gradientOptions} />}
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
              canvaComponent={<FlexboxCanva flexboxOptions={flexboxOptions} />}
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
  );
}

export default Main