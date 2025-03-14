import { Required } from "./Required";

export const Step = ({
  inputTitle,
  inputType,
  inputName,
  className,
  onChange,
  error,
  errorMessages,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex">
        <label
          className="text-sm font-semibold leading-[16px] tracing-[-0.14px] text-[#334155]"
          htmlFor="info"
        >
          {inputTitle}
        </label>
        <Required />
      </div>

      <input
        onChange={onChange}
        className={
          `p-3 items-center rounded-[8px] border solid ${
            error ? "border-[#E14942]" : "border-[#8B8E95]"
          } ` + className
        }
        type={inputType}
        placeholder="name"
        id="info"
        name={inputName}
      ></input>
      {error ? (
        <p className="text-sm leading-[20px] tracing-[-0.28px] text-[#E14942]">
          {errorMessages}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

// display: flex;
// height: 20px;
// flex-direction: column;
// justify-content: flex-end;
// align-self: stretch;
// color: #E14942;
