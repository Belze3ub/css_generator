interface Props {
  color: string;
  setColor: (color: string) => void;
}

const ColorChanger = ({color, setColor}: Props) => {
  return (
    <input className="colorChanger" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
  )
}
export default ColorChanger