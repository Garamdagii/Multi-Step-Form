import { FaChevronLeft } from "react-icons/fa6";

export const Back = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="flex w-[128px] py-[10px] px-3 justify-center items-center gap-1 rounded-[6px] border solid border-[#CBD5E1] text-[16px] font-medium text-[#202124] leading-[24px] tracing-[-0.16px]"
      >
        {" "}
        <FaChevronLeft /> Back{" "}
      </button>
    </div>
  );
};
