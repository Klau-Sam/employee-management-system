import { useId, ComponentProps, Ref, forwardRef } from 'react';
// import clsx from 'clsx';

import { Label } from '../../atoms';

type Props = ComponentProps<'input'> & {
  label: string;
};

export const Input = forwardRef(
  (
    { label, type, value, onChange, required }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const id = useId();
    // const classes = clsx('mx-2 border', className);

    return (
      <div className="mb-2">
        <Label id={id}>{label}</Label>
        <input
          id={id}
          name={id}
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          required={required}
        />
      </div>
    );
  }
);
