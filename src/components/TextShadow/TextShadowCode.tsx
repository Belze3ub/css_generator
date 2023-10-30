import { TextShadow } from '../../interfaces/TextShadow';
import CodeDisplay from '../CodeDisplay';

interface Props {
  textShadowOptions: TextShadow;
}

const TextShadowCode = ({ textShadowOptions }: Props) => {
  const { horizontal, vertical, blur, color } = textShadowOptions;

  const textShadowCode = `text-shadow: ${horizontal}px ${vertical}px ${blur}px ${color}`;

  return <CodeDisplay code={textShadowCode} />;
};

export default TextShadowCode;
