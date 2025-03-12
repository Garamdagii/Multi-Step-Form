import { Footer, Header } from ".";

export const Page4 = ({ stepCount }) => {
  return (
    <div className="flex w-screen h-screen pt-[182px] justify-center bg-gray-200">
      <div className="flex flex-col rounded-[8px] bg-white w-fit h-fit">
        <div className="flex flex-col gap-2 p-8">
          <Header isFinal={true} />
          <Footer check={true} stepCount={stepCount} />
        </div>
      </div>
    </div>
  );
};
