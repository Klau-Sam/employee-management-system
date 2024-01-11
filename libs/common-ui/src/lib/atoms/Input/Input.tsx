type Props = {
  type: string; // predefined
  id: string;
  label: string;
  value?: string;
  isRequired?: boolean;
};

export const Input = ({ type, id, label, value, isRequired }: Props) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        className="mx-2 border"
        value={value}
        required={isRequired}
      />
    </>
  );
};
