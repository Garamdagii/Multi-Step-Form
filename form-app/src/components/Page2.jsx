import { Back } from "./Back";
import { Footer } from "./Footer";
import { Step } from "./Step";

export const Page2 = ({
  previousStep,
  nextStep,
  stepCount,
  handleOnChanges,
  error,
  handleErrors,
  initialValues,
}) => {
  const handleSubmit = () => {
    if (initialValues.phone !== Number()) {
      handleErrors();
    } else {
      nextStep();
    }
  };
  return (
    <div className="flex flex-col min-h-[420px] justify-between rounded-[8px] bg-white">
      <div className="flex flex-col gap-3">
        <Step
          inputType="email"
          inputName="email"
          inputTitle="Email"
          onChange={handleOnChanges}
          // validation=".+@example.com"
          error={error}
          errorMessages="Please provide a valid email address."
        />
        <Step
          inputType="tel"
          inputName="phone"
          inputTitle="Phone number"
          onChange={handleOnChanges}
          error={error}
          errorMessages="Please enter a valid phone number."
        />
        <Step
          inputType="password"
          inputName="password"
          inputTitle="Password"
          onChange={handleOnChanges}
          error={error}
          errorMessages="Password must include letters and numbers."
        />
        <Step
          inputType="password"
          inputName="confirm"
          inputTitle="Confirm password"
          onChange={handleOnChanges}
          error={error}
          errorMessages="Passwords do not match. Please try again."
        />
      </div>
      {/* <Back onClick={previousStep} /> */}
      <Footer
        onClick={handleSubmit}
        stepCount={stepCount}
        nonFirst={true}
        onClick1={previousStep}
      />
    </div>
  );
};
