import { BorderRadius } from '../../App';
import CodeDisplay from '../CodeDisplay';

interface Props {
  borderRadiusOptions: BorderRadius;
}

const TextShadowCode = ({ borderRadiusOptions }: Props) => {
  const { topLeft, topRight, bottomLeft, bottomRight, unit } =
    borderRadiusOptions;

  const borderRadiusCode = `border-radius: ${topLeft}${unit} ${topRight}${unit} ${bottomRight}${unit} ${bottomLeft}${unit}`;

  return <CodeDisplay code={borderRadiusCode} />;
};

export default TextShadowCode;
