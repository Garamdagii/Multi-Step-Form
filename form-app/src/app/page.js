"use client";

import { Header, Page1, Page2, Page3, Page4 } from "@/components";
import { useState } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phone: "",
  password: "",
  confirm: "",
  dateofBirth: "",
};

export default function Home() {
  const [stepCount, setStepCount] = useState(0);
  const [inputValue, setInputValue] = useState(initialValues);
  const [error, setError] = useState(false);

  const nextStep = () => {
    if (stepCount >= 3) return;
    setStepCount(stepCount + 1);
  };

  const previousStep = () => {
    if (stepCount < 1) return;
    setStepCount(stepCount - 1);
  };

  const CurrentStep = [Page1, Page2, Page3, Page4][stepCount];
  const handleValues = (event) => {
    const { name, value } = event.target;
    setError(false);
    setInputValue((previousValues) => ({ ...previousValues, [name]: value }));
  };
  // console.log(inputValue);

  const handleErrors = () => {
    setError(true);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-200 gap-10">
      <div className="flex flex-col h-fit p-[32px] gap-7 justify-between rounded-[8px] bg-white">
        {!(stepCount == 3) && <Header />}
        <div className="flex flex-col min-h-[420px] justify-between rounded-[8px] bg-white">
          <CurrentStep
            nextStep={nextStep}
            previousStep={previousStep}
            stepCount={stepCount}
            initialValues={inputValue}
            handleOnChanges={handleValues}
            error={error}
            handleErrors={handleErrors}
          />
        </div>
      </div>
    </div>
  );
}
