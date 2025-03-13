import { Back } from "./Back";
import { Footer } from "./Footer";
import { Step } from "./Step";

export const Page2 = ({
  previousStep,
  nextStep,
  stepCount,
  handleOnChanges,
}) => {
  return (
    <div className="flex flex-col h-[420px] justify-between rounded-[8px] bg-white">
      <div className="flex flex-col gap-3">
        <Step
          inputType="email"
          inputName="email"
          inputTitle="Email"
          onChange={handleOnChanges}
        />
        <Step
          inputType="tel"
          inputName="phone"
          inputTitle="Phone number"
          onChange={handleOnChanges}
        />
        <Step
          inputType="password"
          inputName="password"
          inputTitle="Password"
          onChange={handleOnChanges}
        />
        <Step
          inputType="password"
          inputName="confirm"
          inputTitle="Confirm password"
          onChange={handleOnChanges}
        />
      </div>
      <div className="flex gap-2">
        <Back onClick={previousStep} />
        <Footer onClick={nextStep} stepCount={stepCount} />
      </div>
    </div>
  );
};
