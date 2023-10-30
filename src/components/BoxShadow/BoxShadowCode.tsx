import { BoxShadow } from '../../interfaces/BoxShadow';
import CodeDisplay from '../CodeDisplay';

interface Props {
  boxShadowOptions: BoxShadow;
}

const BoxShadowCode = ({ boxShadowOptions }: Props) => {
  const { inset, horizontal, vertical, blur, spread, color } = boxShadowOptions;

  const boxShadowCode = `box-shadow:${
    inset ? ' inset' : ''
  } ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color};
-webkit-box-shadow:${
    inset ? ' inset' : ''
  } ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color};
-moz-box-shadow:${
    inset ? ' inset' : ''
  } ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color};`;

  return <CodeDisplay code={boxShadowCode} />;
};

export default BoxShadowCode;
