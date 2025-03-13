import { Back } from "./Back";
import { Footer } from "./Footer";
import { Step } from "./Step";
import { Required } from "./Required";

export const Page3 = ({
  previousStep,
  nextStep,
  stepCount,
  handleOnChanges,
}) => {
  return (
    <div className="flex flex-col h-[420px] justify-between rounded-[8px] bg-white">
      <div className="flex flex-col gap-3">
        <Step
          inputType="date"
          inputName="dateofBirth"
          inputTitle="Date of birth"
          onChange={handleOnChanges}
        />
        <div className="flex text-sm font-semibold leading-[16px] tracing-[-0.14px] text-[#334155]">
          <p>Profile image</p>
          <Required />
        </div>

        <div className="flex flex-col justify-center items-center h-[180px] min-h-[80px] gap-2 p-4 rounded-[6px] bg-[#7f7f800d]">
          {/* <Step inputType="image" /> */}

          <div className="relative">
            <label
              htmlFor="info"
              className="absolute top-1/2 right-1/2 text-sm font-medium text-center text-[#09090B] leading-[20px]"
            >
              Add image
            </label>
            <Step inputType="file" className={"file:hidden opacity-0 "} />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Back onClick={previousStep} />
        <Footer onClick={nextStep} stepCount={stepCount} />
      </div>
    </div>
  );
};
