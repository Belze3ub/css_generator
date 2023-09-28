// import { useState } from 'react';
// import Canva from './Canva';
// import PropertiesSection from './PropertiesSection';
// import { Flex, Grid, HStack, SimpleGrid } from '@chakra-ui/react';
// import CodeDisplay from './CodeDisplay';

// export interface Dimensions {
//   width: number,
//   height: number,
// }

// interface Props {
//   className: string
// }

// const Playground = ({className}:Props) => {
//   const [dimensions, setDimensions] = useState({ width: 100, height: 100 });
//   const [radius, setRadius] = useState(0);
//   const [color, setColor] = useState('#000000');
//   const [borderUnit, setBorderUnit] = useState('px');
//   const [dimensionsUnit, setDimensionsUnit] = useState('px');
//   const [distance, setDistance] = useState(20);
//   const [distanceUnit, setDistanceUnit] = useState('px')
//   const [blur, setBlur] = useState(60)
//   const parentWidth = 300;
//   return (
//     <SimpleGrid spacing={5} columns={3} className={className}>
//       <Canva
//         radius={radius}
//         height={dimensions.height}
//         width={dimensions.width}
//         color={color}
//         borderUnit={borderUnit}
//         dimensionsUnit={dimensionsUnit}
//         distance={distance}
//         setDistance={setDistance}
//         distanceUnit={distanceUnit}
//         blur={blur}
//       />
//       <PropertiesSection
//         radius={radius}
//         setRadius={setRadius}
//         borderUnit={borderUnit}
//         setBorderUnit={setBorderUnit}
//         dimensions={dimensions}
//         setDimensions={setDimensions}
//         dimensionsUnit={dimensionsUnit}
//         setDimensionsUnit={setDimensionsUnit}
//         color={color}
//         setColor={setColor}
//         spacing={5}
//         parentWidth={parentWidth}
//         distance={distance}
//         setDistance={setDistance}
//         distanceUnit='px'
//         blur={blur}
//         setBlur={setBlur}
//       />
//       <CodeDisplay radius={radius} color={color} horizontal={horizontal} vertical={0} spread={0} blur={blur} />
//     </SimpleGrid>
//   );
// };

// export default Playground;
