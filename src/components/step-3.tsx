import { useStepContext } from "../context/useStepContext";
import { FaBackward } from "react-icons/fa";


const Step3 = () => {

  const {setStep} = useStepContext()

  return (
    <div className="p-10 max-w-xl w-full flex flex-col items-center space-y-6">
      <h2 className="text-pink-200 text-2xl font-bold text-center tracking-wide jockey-one-regular">
        Review Transaction
      </h2>
      
      <div className="w-full p-6">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          <div className="flex flex-col justify-center items-center gap-3 flex-1">
            <h3 className="text-pink-200 text-lg font-semibold text-center">
              Total Recipients
            </h3>
            <p className="jockey-one-regular font-bold text-3xl text-pink-700">
              10
            </p>
          </div>
          
          <div className="flex flex-col justify-center items-center gap-3 flex-1">
            <h3 className="text-pink-200 text-lg font-semibold text-center">
              Total Tokens
            </h3>
            <p className="jockey-one-regular font-bold text-3xl text-pink-700">
              50 $G
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex gap-4 w-full justify-center">
        <button
          onClick={() => setStep(2)}
          className="bg-gray-500 justify-center items-center flex gap-5 w-32 h-10 rounded-lg text-white font-semibold text-md hover:bg-gray-400 transition-colors duration-200 shadow-lg transform hover:scale-105 cursor-pointer">
            <FaBackward />
          Back
        </button>
        <button className="bg-blue-600 w-40 h-10 rounded-lg text-white font-semibold text-md hover:bg-blue-500 transition-colors duration-200 shadow-lg transform hover:scale-105 cursor-pointer">
          Submit Transaction
        </button>
      </div>
    </div>
  );
};

export default Step3;