import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { Back } from ".";

export const Footer = ({ onClick, stepCount, nonFirst }) => {
  return (
    <div className="flex gap-2">
      {nonFirst && <Back />}
      <button className="flex w-[128px] py-[10px] px-3 justify-center items-center gap-1 rounded-[6px] border solid border-[#CBD5E1] text-[16px] font-medium text-[#202124] leading-[24px] tracing-[-0.16px]">
        <FaChevronLeft /> Back
      </button>
      <button
        onClick={onClick}
        className="w-full flex py-[10px] px-3 justify-center items-center gap-1 rounded-[6px] bg-[#121316] text-[16px] font-medium leading-[24px] text-[#FFF]"
      >
        Continue <p>{stepCount + 1}/3</p> <FaChevronRight />{" "}
      </button>
    </div>
  );
};
