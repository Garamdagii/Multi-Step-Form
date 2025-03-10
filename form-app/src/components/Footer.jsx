import { FaChevronRight } from "react-icons/fa6";
export const Footer = ({}) => {
  return (
    <div>
      <button
        className="flex py-[10px] px-3 justify-center items-center gap-1 
      w-full 
      rounded-[6px] bg-[#121316] text-[16px] font-medium leading-[24px] text-[#FFF]"
      >
        Continue <p>1</p> <p>/3</p> <FaChevronRight />{" "}
      </button>
    </div>
  );
};
