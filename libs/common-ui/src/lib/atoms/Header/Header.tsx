import { ComponentProps } from 'react';

type Props = {
  children: string | undefined;
};

export const Header = ({ children }: ComponentProps<'header'> & Props) => {
  return <header className="text-3xl font-bold">{children}</header>;
};
