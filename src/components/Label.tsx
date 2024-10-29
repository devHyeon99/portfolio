interface LabelProps {
  text: string;
  color: keyof typeof BG_COLOR;
}

const BG_COLOR = {
  black: 'bg-black text-white',
  yellow: 'bg-yellow-300',
  blue: 'bg-blue-400 text-white',
  red: 'bg-red-400 text-white',
  orange: 'bg-orange-400 text-white',
  brown: 'bg-amber-900 text-white',
  pink: 'bg-pink-500 text-white',
  green: 'bg-green-500 text-white',
} as const;

const Label = ({ text, color }: LabelProps) => {
  return (
    <div
      className={`${BG_COLOR[color]} flex justify-center items-center text-center px-2 rounded-lg font-semibold`}
    >
      {text}
    </div>
  );
};

export default Label;
