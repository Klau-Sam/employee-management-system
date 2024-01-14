import { MouseEventHandler, ComponentProps } from 'react';

const colors = {
  turquise: '#1abc9c',
  emerald: '#2ecc71',
  'peter-river': '#3498db',
  amethyst: '#9b59b6',
  'wet-asphalt': '#34495e',
  'green-sea': '#16a085',
  nephritis: '#16a085',
  'belize-hol': '#2980b9',
  wisteria: '#8e44ad',
  midnight: '#2c3e50',
  'sun-flower': '#f1c40f',
  carrot: '#e67e22',
  alizarin: '#e74c3c',
  clouds: '#ecf0f1',
  concrete: '#95a5a6',
  orange: '#f39c12',
  pumpkin: '#d35400',
  pomegranate: '#c0392b',
  silver: '#bdc3c7',
  asbestos: '#7f8c8d',
};

type ColorType = keyof typeof colors;

type Props = {
  label: string;
  bgColor?: ColorType;
  color?: ColorType;
  // onClick?: () => void;
  // onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({
  label,
  bgColor,
  color,
  onClick,
  className,
  ...rest
}: ComponentProps<'button'> & Props) => {
  const _color = color ? colors[color] : '';
  const _bgColor = bgColor ? colors[bgColor] : '';

  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        color: _color,
        backgroundColor: _bgColor,
      }}
      {...rest}
    >
      {label}
    </button>
  );
};
