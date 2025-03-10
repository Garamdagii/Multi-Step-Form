import { Footer } from "./Footer";
import { Header } from "./Header";
import { Step } from "./Step";

export const Page1 = ({}) => {
  return (
    <div className="flex flex-col p-[32px] h-[591px] justify-between rounded-[8px] bg-amber-50">
      <div className="flex flex-col gap-7">
        <Header />
        <div className="flex flex-col gap-3">
          <Step inputname="First name" />
          <Step inputname="Last name" />
          <Step inputname="Username" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
