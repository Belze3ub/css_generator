import { Gradient } from "../../interfaces/Gradient";

interface Props {
  gradientOptions: Gradient;
}

const GradientCanva = ({ gradientOptions }: Props) => {
  const { mode, colors, colorPercentages, degree } = gradientOptions;
  const gradientColorStops = colors
    .map((color, index) => `${color} ${colorPercentages[index]}%`)
    .join(', ');
  return (
    <div
      className="gradient"
      style={{
        width: `100%`,
        height: `100%`,
        background: `${mode}-gradient(${
          mode === 'linear' ? `${degree}deg` : 'circle'
        }, ${gradientColorStops})`,
        borderRadius: '5px',
      }}
    ></div>
  );
};

export default GradientCanva;
