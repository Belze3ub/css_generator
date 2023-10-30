import { Button } from '../../interfaces/Button';
import CodeDisplay from '../CodeDisplay';

interface Props {
  buttonOptions: Button;
}
const ButtonCode = ({ buttonOptions }: Props) => {
  const {
    color,
    backgroundColor,
    radius,
    borderColor,
    borderWidth,
    borderStyle,
    paddingX,
    paddingY,
  } = buttonOptions;

  const buttonCode = `background-color: ${backgroundColor};
color: ${color};
border-radius: ${radius}px;
border: ${
    borderStyle === 'none'
      ? 'none'
      : `${borderWidth}px ${borderStyle} ${borderColor};`
  }
padding: ${paddingY}px ${paddingX}px`;

  return <CodeDisplay code={buttonCode} />;
};

export default ButtonCode;
