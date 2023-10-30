import { Gradient } from '../../App';
import CodeDisplay from '../CodeDisplay';

interface Props {
  gradientOptions: Gradient;
}

const GradientCode = ({ gradientOptions }: Props) => {
  const { mode, colors, colorPercentages, degree } = gradientOptions;

  const gradientColorStops = colors
    .map((color, index) => `${color} ${colorPercentages[index]}%`)
    .join(', ');
  const gradientCode = `background: ${mode}-gradient(${
    mode === 'linear' ? `${degree}deg` : 'circle'
  }, ${gradientColorStops})`;

  return <CodeDisplay code={gradientCode} />;
};

export default GradientCode;
