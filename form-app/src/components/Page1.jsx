import { Back } from ".";
import { Footer } from "./Footer";
import { Step } from "./Step";

export const Page1 = ({ nextStep, stepCount }) => {
  return (
    <div className="flex flex-col h-[420px] justify-between rounded-[8px] bg-white">
      <div className="flex flex-col gap-3">
        <Step inputType="text" isRequired={true} inputName="First name" />
        <Step inputType="text" isRequired={true} inputName="Last name" />
        <Step inputType="text" isRequired={true} inputName="Username" />
      </div>
      <Footer onClick={nextStep} stepCount={stepCount} page="1/3" />
    </div>
  );
};
