import { Flexbox } from '../../interfaces/Flexbox';
import './FlexboxCanva.css';

interface Props {
  flexboxOptions: Flexbox;
}

const FlexboxCanva = ({ flexboxOptions }: Props) => {
  const {
    display,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
    flexItems,
  } = flexboxOptions;

  return (
    <div
      style={{
        padding: `1rem`,
        gap: `1rem`,
        width: `100%`,
        height: `100%`,
        border: `3px dashed #5983fc`,
        borderRadius: `.5rem`,
        display: `${display}`,
        flexDirection: `${flexDirection}`,
        flexWrap: `${flexWrap}`,
        justifyContent: `${justifyContent}`,
        alignItems: `${alignItems}`,
        alignContent: `${alignContent}`,
      }}
    >
      {flexItems.map((item) => (
        <div key={item} className={`flex-item${item === 2 ? ' middle' : ''}`}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default FlexboxCanva;
