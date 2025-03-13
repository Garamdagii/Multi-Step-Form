import { Back } from ".";
import { Footer } from "./Footer";
import { Step } from "./Step";

export const Page1 = ({
  nextStep,
  stepCount,
  initialValues,
  handleChanges,
}) => {
  const handleSubmit = () => {
    if (initialValues.firstName === "") {
      error = true;
    }
    nextStep;
  };

  return (
    <div className="flex flex-col h-[420px] justify-between rounded-[8px] bg-white">
      <div className="flex flex-col gap-3">
        <Step
          inputType="text"
          inputName="firstName"
          inputTitle="First name"
          onChange={handleChanges}
        />
        <Step
          inputType="text"
          inputName="lastName"
          inputTitle="Last name"
          onChange={handleChanges}
        />
        <Step
          inputType="text"
          inputName="userName"
          inputTitle="Username"
          onChange={handleChanges}
        />
      </div>
      <Footer onClick={handleSubmit} stepCount={stepCount} />
    </div>
  );
};
