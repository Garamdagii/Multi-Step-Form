export const Header = ({ isFinal }) => {
  return (
    <div className="flex flex-col gap-2">
      <img className="size-[60px]" src="Main.png"></img>
      <p className="text-[26px] font-semibold tracing-[-0.78px] text-[#202124]">
        {isFinal ? "You're All Set 🔥" : "Join Us! 😎"}
      </p>
      <p className="text-[18px] text-[#8E8E8E]">
        {isFinal
          ? "We have received your submission. Thank you!"
          : "Please provide all current information accurately."}
      </p>
    </div>
  );
};
