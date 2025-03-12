import { Back } from "./Back";
import { Footer } from "./Footer";
import { Step } from "./Step";

export const Page2 = ({ previousStep, nextStep, stepCount }) => {
  return (
    <div className="flex flex-col h-[420px] justify-between rounded-[8px] bg-white">
      <div className="flex flex-col gap-3">
        <Step inputType="email" isRequired={true} inputName="Email" />
        <Step inputType="tel" isRequired={true} inputName="Phone number" />
        <Step inputType="password" isRequired={true} inputName="Password" />
        <Step
          inputType="password"
          isRequired={true}
          inputName="Confirm password"
        />
      </div>
      <div className="flex gap-2">
        <Back onClick={previousStep} />
        <Footer onClick={nextStep} stepCount={stepCount} page="2/3" />
      </div>
    </div>
  );
};
