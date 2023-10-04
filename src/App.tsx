import { Switch, useMediaQuery, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';
import PropertiesSection from './components/PropertiesSection';
import CodeDisplay from './components/CodeDisplay';
import OptionSection from './components/OptionSection';
import Canva from './components/Canva';

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

const App = () => {
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

  const [selectedOption, setSelectedOption] = useState('box-shadow');

  const [isLargerThanMobile] = useMediaQuery('(min-width: 768px)');

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <div>
        <Switch onChange={toggleColorMode} />
      </div>
      <div className="container">
        {isLargerThanMobile && (
          <div className="option">
            <OptionSection setSelectedOption={setSelectedOption} />
          </div>
        )}
        <div className="properties">
          <PropertiesSection
            boxShadowOptions={boxShadowOptions}
            setBoxShadowOptions={setBoxShadowOptions}
            textShadowOptions={textShadowOptions}
            setTextShadowOptions={setTextShadowOptions}
            borderRadiusOptions={borderRadiusOptions}
            setBorderRadiusOptions={setBorderRadiusOptions}
            spacing={5}
            selectedOption={selectedOption}
          />
        </div>
        <div className="canva">
          <Canva
            boxShadowOptions={boxShadowOptions}
            textShadowOptions={textShadowOptions}
            borderRadiusOptions={borderRadiusOptions}
            selectedOption={selectedOption}
          />
        </div>
        <div className="code">
          <CodeDisplay
            boxShadowOptions={boxShadowOptions}
            textShadowOptions={textShadowOptions}
            borderRadiusOptions={borderRadiusOptions}
            selectedOption={selectedOption}
          />
        </div>
      </div>
    </>
  );
};
export default App;
