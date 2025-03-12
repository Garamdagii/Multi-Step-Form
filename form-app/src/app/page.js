"use client";

import { Footer, Header, Page1, Page2, Page3, Page4 } from "@/components";

import { useState } from "react";

export default function Home() {
  const [stepCount, setStepCount] = useState(0);

  const nextStep = () => {
    if (stepCount >= 3) return;
    setStepCount(stepCount + 1);
  };

  const previousStep = () => {
    if (stepCount < 1) return;
    setStepCount(stepCount - 1);
  };

  const CurrentStep = [Page1, Page2, Page3, Page4][stepCount];

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-200 gap-10">
      <div className="flex flex-col p-[32px] gap-7 justify-between rounded-[8px] bg-white">
        <Header />
        <CurrentStep
          nextStep={nextStep}
          previousStep={previousStep}
          stepCount={stepCount}
        />
      </div>
    </div>
  );
}

// {
/* <div className="flex flex-col gap-3">
<Step inputType="text" inputName="First name" isRequired={true} />
<Step inputType="text" inputName="Last name" isRequired={true} />
<Step inputType="text" inputName="Username" isRequired={true} />
</div>
<Footer page="1/3" /> */
// }

// export default function Home() {
//   return (
//     <div className="flex justify-center items-center w-screen h-screen bg-gray-200">
//       <div className="flex flex-col p-[32px] h-[655px] justify-between rounded-[8px] bg-white">
//         <div className="flex flex-col gap-7">
//           <Header />
//           <div className="flex flex-col gap-3">
//             <Step inputType="email" isRequired={true} inputName="Email" />
//             <Step inputType="tel" isRequired={true} inputName="Phone number" />
//             <Step inputType="password" isRequired={true} inputName="Password" />
//             <Step
//               inputType="password"
//               isRequired={true}
//               inputName="Confirm password"
//             />
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <Back />
//           <Footer page="2/3" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div className="flex justify-center items-center w-screen h-screen bg-gray-200">
//       <div className="flex flex-col p-[32px] h-[655px] justify-between rounded-[8px] bg-white">
//         <div className="flex flex-col gap-7">
//           <Header />
//           <div className="flex flex-col gap-3">
//             <Step
//               inputType="date"
//               inputName="Date of birth"
//               isRequired={true}
//             />
//             <div className="flex text-sm font-semibold leading-[16px] tracing-[-0.14px] text-[#334155]">
//               <p>Profile image</p>
//               <Required />
//             </div>

//             <div className="flex flex-col justify-center items-center h-[180px] min-h-[80px] gap-2 p-4 rounded-[6px] bg-[#7f7f800d]">
//               {/* <Step inputType="image" /> */}

//               <div className="relative">
//                 <label
//                   htmlFor="info"
//                   className="absolute top-1/2 right-1/2 text-sm font-medium text-center text-[#09090B] leading-[20px]"
//                 >
//                   Add image
//                 </label>
//                 <Step
//                   isRequired={false}
//                   inputType="file"
//                   className={"file:hidden opacity-0 "}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <Back />
//           <Footer page="3/3" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div className="flex w-screen h-screen pt-[182px] justify-center bg-gray-200">
//       <div className="flex flex-col rounded-[8px] bg-white w-fit h-fit">
//         <div className="flex flex-col gap-2 p-8">
//           <Header isFinal={true} />
//         </div>
//       </div>
//     </div>
//   );
// }
