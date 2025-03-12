import { Required } from "./Required";

export const Step = ({ inputType, inputName, className, isRequired }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex">
        <label
          className="text-sm font-semibold leading-[16px] tracing-[-0.14px] text-[#334155]"
          htmlFor="info"
        >
          {inputName}
        </label>
        {isRequired ? <Required /> : ""}
      </div>

      <input
        className={
          `p-3 items-center rounded-[8px] border solid border-[#8B8E95] ` +
          className
        }
        type={inputType}
        placeholder="name"
        id="info"
        name="info"
      ></input>
    </div>
  );
};
