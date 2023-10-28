import { useState } from 'react';
import Canva from './Canva';
import CodeDisplay from './CodeDisplay';
import PropertiesSection from './PropertiesSection';

interface Props {
  selectedOption: string;
}

export interface boxShadow {
  radius: number;
  color: string;
  horizontal: number;
  vertical: number;
  spread: number;
  blur: number;
  inset: boolean;
}

export interface textShadow {
  text: string;
  horizontal: number;
  vertical: number;
  blur: number;
  color: string;
}

export interface borderRadius {
  unit: string;
  topLeft: number;
  topRight: number;
  bottomRight: number;
  bottomLeft: number;
}

export interface gradient {
  mode: string;
  degree: number;
  color1: string;
  color1Percentage: number;
  color2: string;
  color2Percentage: number;
}

const Display = ({ selectedOption }: Props) => {
  const [boxShadowOptions, setBoxShadowOptions] = useState<boxShadow>({
    radius: 0,
    color: '#42445A',
    horizontal: 8,
    vertical: 8,
    spread: 0,
    blur: 24,
    inset: false,
  });

  const [textShadowOptions, setTextShadowOptions] = useState<textShadow>({
    text: 'Text Shadow',
    horizontal: 4,
    vertical: 4,
    blur: 6,
    color: '#42445A',
  });

  const [borderRadiusOptions, setBorderRadiusOptions] = useState<borderRadius>({
    unit: 'px',
    topLeft: 20,
    topRight: 20,
    bottomRight: 20,
    bottomLeft: 20,
  });

  const [gradientOptions, setGradientOptions] = useState<gradient>({
    mode: 'linear',
    degree: 90,
    color1: '#5983FC',
    color1Percentage: 20,
    color2: '#293556',
    color2Percentage: 80,
  });

  return (
    <>
      <div className="properties">
        <PropertiesSection
          boxShadowOptions={boxShadowOptions}
          setBoxShadowOptions={setBoxShadowOptions}
          textShadowOptions={textShadowOptions}
          setTextShadowOptions={setTextShadowOptions}
          borderRadiusOptions={borderRadiusOptions}
          setBorderRadiusOptions={setBorderRadiusOptions}
          gradientOptions={gradientOptions}
          setGradientOptions={setGradientOptions}
          spacing={5}
          selectedOption={selectedOption}
        />
      </div>
      <div className="canva">
        <Canva
          boxShadowOptions={boxShadowOptions}
          textShadowOptions={textShadowOptions}
          borderRadiusOptions={borderRadiusOptions}
          gradientOptions={gradientOptions}
          selectedOption={selectedOption}
        />
      </div>
      <div className="code">
        <CodeDisplay
          boxShadowOptions={boxShadowOptions}
          textShadowOptions={textShadowOptions}
          borderRadiusOptions={borderRadiusOptions}
          gradientOptions={gradientOptions}
          selectedOption={selectedOption}
        />
      </div>
    </>
  );
};

export default Display;
