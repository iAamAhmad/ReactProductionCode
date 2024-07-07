/* eslint-disable react/prop-types */


const InputField = ({
  label,
  type = 'text',
  name,
  onChange,
  register,
  requiredMessage,
  error,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor={name} className="font-bold">
        {label}
      </label>
      <input
        className="border p-2"
        type={type}
        id={name}
        name={name}
        {...props}
        onChange={onChange}
        {...register(name, { required: requiredMessage })}

      />
      {error && <span className="text-blue-600">{error.message}</span>}
    </div>
  );
};

export default InputField;
