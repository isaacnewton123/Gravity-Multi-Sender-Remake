import React from "react";

interface StepItem {
  step: number;
  label: string;
}

const StepBar = () => {
  const stepItems: StepItem[] = [
    {
      step: 1,
      label: "Connect Wallet",
    },
    {
      step: 2,
      label: "Input Recipient",
    },
    {
      step: 3,
      label: "Review & Submit",
    },
  ];
  return (
    <div className="flex items-center justify-center ">
      {stepItems.map((item, index) => {
        return (
          <React.Fragment key={item.step}>
            <div className="flex flex-col items-center -ml-8">
              <div className="h-8 w-8 flex items-center justify-center rounded-full font-bold bg-pink-600 text-white">
                {item.step}
              </div>
              <span className="text-center mt-2 text-xs font-semibold text-pink-400">
                {item.label}
              </span>
            </div>
            {index < stepItems.length - 1 && (
              <div className="h-px w-32 -mt-5 -ml-6 bg-pink-600"></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepBar;
