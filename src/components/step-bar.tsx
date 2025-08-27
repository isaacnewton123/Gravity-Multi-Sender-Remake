import React from "react";
import { useStepContext } from "../context/useStepContext";

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

  const { step } = useStepContext();

  return (
    <div className="flex items-center justify-center ">
      {stepItems.map((item, index) => {
        const isActive = item.step === step;
        const isCompleted = item.step < step;
        const isUpcoming = item.step > step;

        const circleClasses = `
          h-8 w-8 flex items-center justify-center rounded-full font-bold text-white
          ${isActive ? "bg-pink-600" : ""}
          ${isCompleted ? "bg-pink-600" : ""}
          ${isUpcoming ? "bg-gray-400" : ""}
        `;

        const labelClasses = `
          text-center mt-2 text-xs font-semibold
          ${isActive ? "text-pink-600" : "text-gray-400"}
        `;

        const dividerClasses = `
          h-px w-32 -mt-5 -ml-6
          ${isCompleted ? "bg-pink-600" : "bg-gray-400"}
        `;

        return (
          <React.Fragment key={item.step}>
            <div className="flex flex-col items-center -ml-8">
              <div className={circleClasses}>
                {item.step}
              </div>
              <span className={labelClasses}>
                {item.label}
              </span>
            </div>
            {index < stepItems.length - 1 && (
              <div className={dividerClasses}></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepBar;