import { Footer } from "./Footer";
import { Step } from "./Step";

export const Page1 = ({
  nextStep,
  stepCount,
  handleOnChanges,
  initialValues,
  handleErrors,
  error,
}) => {
  const handleSubmit = () => {
    if (initialValues.firstName === "") {
      handleErrors();
    } else {
      nextStep();
    }
  };

  return (
    <div className="flex flex-col min-h-[420px] justify-between rounded-[8px] bg-white">
      <div className="flex flex-col gap-3">
        <Step
          inputType="text"
          inputName="firstName"
          inputTitle="First name"
          onChange={handleOnChanges}
          error={error}
          errorMessages="First name cannot contain special characters or numbers."
        />
        <Step
          inputType="text"
          inputName="lastName"
          inputTitle="Last name"
          onChange={handleOnChanges}
          error={error}
          errorMessages="Last name cannot contain special characters or numbers."
        />
        <Step
          inputType="text"
          inputName="userName"
          inputTitle="Username"
          onChange={handleOnChanges}
          error={error}
          errorMessages="This username is already taken. Please choose another one."
        />
      </div>
      <Footer onClick={handleSubmit} stepCount={stepCount} nonFirst={false} />
    </div>
  );
};
