import { Required } from "./Required";

export const Step = ({ inputname }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-sm font-semibold leading-[16px] tracing-[-0.14px] text-[#334155]"
        htmlFor="info"
      >
        {inputname} <span className="text-red-600">*</span>
      </label>
      <Required />
      <input
        className="flex p-3 items-center self-stretch rounded-[8px] border solid border-[#0CA5E9]"
        type="text"
        placeholder="name"
        id="info"
        name="info"
      ></input>
    </div>
  );
};
