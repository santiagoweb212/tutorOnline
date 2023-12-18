const Input = ({ styleError, ...props }) => {
  return (
    <input
      type="text"
      name="username"
      className={`w-full  rounded-md py-2 px-4 ${
        styleError ? "border-2 border-red-500 " : ""
      } outline-none`}
      {...props}
    />
  );
};

export default Input;
