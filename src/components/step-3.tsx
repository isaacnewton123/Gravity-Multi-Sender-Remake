import { useDataContext } from "../context/data/useDataContext";
import { useStepContext } from "../context/step/useStepContext";
import { FaBackward } from "react-icons/fa";

const Step3 = () => {
  const { data } = useDataContext();

  const { setStep } = useStepContext();

  // Menghitung total amount dari semua data
  const totalAmount = data.reduce((total, item) => total + item.amount, 0);

  // Format number dengan thousand separator dan desimal (opsional)
  const formatNumber = (num: number): string => {
    // Jika angka sangat kecil (< 0.01), tampilkan dengan precision lebih tinggi
    if (num < 0.01 && num > 0) {
      return num.toFixed(8); // Sampai 8 desimal untuk angka sangat kecil
    }
    // Untuk angka normal, tampilkan maksimal 4 desimal
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 4
    });
  };

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
              {data.length}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3 flex-1">
            <h3 className="text-pink-200 text-lg font-semibold text-center">
              Total Tokens
            </h3>
            <p className="jockey-one-regular font-bold text-3xl text-pink-700">
              {formatNumber(totalAmount)} 
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 w-full justify-center">
        <button
          onClick={() => setStep(2)}
          className="bg-gray-500 justify-center items-center flex gap-5 w-32 h-10 rounded-lg text-white font-semibold text-md hover:bg-gray-400 transition-colors duration-200 shadow-lg transform hover:scale-105 cursor-pointer"
        >
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
