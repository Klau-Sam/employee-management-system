import { useId, ComponentProps } from 'react';

import { Label } from '../../atoms';

type Option = {
  value: string;
  label: string;
};

type Props = ComponentProps<'select'> & {
  label: string;
  options: Option[];
};

export const Select = ({ label, options, ...rest }: Props) => {
  const id = useId();
  const selectOptions = options.map((option) => {
    return <option value={option['value']}>{option['label']}</option>;
  });

  return (
    <div className="mb-2">
      <Label id={id}>{label}</Label>
      <select
        id={id}
        name={id}
        className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 
        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...rest}
      >
        {selectOptions}
      </select>
    </div>
  );
};
