import { Back } from ".";
import { Footer } from "./Footer";
import { Step } from "./Step";

export const Page1 = ({ nextStep, stepCount, handleOnChanges }) => {
  // const handleSubmit = () => {
  //   if (value.firstName === "") {
  //     error = true;
  //   }
  //   nextStep;
  // };

  return (
    <div className="flex flex-col h-[420px] justify-between rounded-[8px] bg-white">
      <div className="flex flex-col gap-3">
        <Step
          inputType="text"
          inputName="firstName"
          inputTitle="First name"
          onChange={handleOnChanges}
        />
        <Step
          inputType="text"
          inputName="lastName"
          inputTitle="Last name"
          onChange={handleOnChanges}
        />
        <Step
          inputType="text"
          inputName="userName"
          inputTitle="Username"
          onChange={handleOnChanges}
        />
      </div>
      <Footer onClick={nextStep} stepCount={stepCount} />
    </div>
  );
};
