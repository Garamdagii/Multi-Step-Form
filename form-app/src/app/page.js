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
  const [value, setValue] = useState(initialValues);
  const [error, setError] = useState(initialValues);

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
    setValue((previousValues) => ({ ...previousValues, [name]: value }));
  };
  // console.log(value);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-200 gap-10">
      <div className="flex flex-col p-[32px] gap-7 justify-between rounded-[8px] bg-white">
        {!(stepCount == 3) && <Header />}
        <CurrentStep
          nextStep={nextStep}
          previousStep={previousStep}
          stepCount={stepCount}
          handleOnChanges={handleValues}
        />
      </div>
    </div>
  );
}
