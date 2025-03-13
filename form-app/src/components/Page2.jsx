import { Back } from "./Back";
import { Footer } from "./Footer";
import { Step } from "./Step";

export const Page2 = ({ previousStep, nextStep, stepCount, handleChanges }) => {
  return (
    <div className="flex flex-col h-[420px] justify-between rounded-[8px] bg-white">
      <div className="flex flex-col gap-3">
        <Step
          inputType="email"
          inputName="email"
          inputTitle="Email"
          onChange={handleChanges}
        />
        <Step
          inputType="tel"
          inputName="phone"
          inputTitle="Phone number"
          onChange={handleChanges}
        />
        <Step
          inputType="password"
          inputName="password"
          inputTitle="Password"
          onChange={handleChanges}
        />
        <Step
          inputType="password"
          inputName="confirm"
          inputTitle="Confirm password"
          onChange={handleChanges}
        />
      </div>
      <div className="flex gap-2">
        <Back onClick={previousStep} />
        <Footer onClick={nextStep} stepCount={stepCount} />
      </div>
    </div>
  );
};
