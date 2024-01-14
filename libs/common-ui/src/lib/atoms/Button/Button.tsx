import { MouseEventHandler, ComponentProps } from 'react';

const colors = {
  emerald: '#2ecc71',
  'peter-river': '#3498db',
  amethyst: '#9b59b6',
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
