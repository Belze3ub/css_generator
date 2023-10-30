import { Flexbox } from '../../interfaces/Flexbox';
import CodeDisplay from '../CodeDisplay';

interface Props {
  flexboxOptions: Flexbox;
}

const BoxShadowCode = ({ flexboxOptions }: Props) => {
  const {
    display,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
  } = flexboxOptions;

  const flexboxCode = `display: ${display};
flex-direction: ${flexDirection};
flex-wrap: ${flexWrap};
justify-content: ${justifyContent};
align-items: ${alignItems};
align-content: ${alignContent}`;

  return <CodeDisplay code={flexboxCode} />;
};

export default BoxShadowCode;
