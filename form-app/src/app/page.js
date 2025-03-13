"use client";

import { Footer, Header, Page1, Page2, Page3, Page4 } from "@/components";
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
  const [value, setValue] = useState(initialValues);
  const [errors, setErrors] = useState("");

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
    const [name, value] = event.target;
    setValue((previousValues) => [...previousValues, { [name]: value }]);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-200 gap-10">
      {!(stepCount === 3) ? (
        <div className="flex flex-col p-[32px] gap-7 justify-between rounded-[8px] bg-white">
          <Header />
          <CurrentStep
            nextStep={nextStep}
            previousStep={previousStep}
            stepCount={stepCount}
            initialValues={value}
            handleChanges={handleValues}
          />
        </div>
      ) : (
        <div className="flex flex-col p-[32px] gap-7 justify-between rounded-[8px] bg-white">
          <CurrentStep
            nextStep={nextStep}
            previousStep={previousStep}
            stepCount={stepCount}
            initialValues={value}
            handleChanges={handleValues}
          />
        </div>
      )}
    </div>
  );
}
