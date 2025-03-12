import { FaChevronRight } from "react-icons/fa6";
export const Footer = ({ onClick, stepCount, check }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex py-[10px] px-3 justify-center items-center gap-1 rounded-[6px] bg-[#121316] text-[16px] font-medium leading-[24px] text-[#FFF]"
    >
      Continue <p>{stepCount + 1}/3</p> <FaChevronRight />{" "}
    </button>
  );
};
